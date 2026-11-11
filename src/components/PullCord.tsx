import {
  type PointerEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

/**
 * Kokonut UI Pull Cord Component
 * Adapted for Portfolio CAD aesthetic with Verlet physics rope simulation,
 * elastic stretch resistance, dynamic return dampening, and theme switching.
 */

const WIDTH = 112;
const HEIGHT = 146;

// Anchor under the lamp shade next to the bulb socket
const ANCHOR = { x: 67, y: 34 };

// Chain parameters
const LINKS = 10;
const LINK = 5.5;

// Simulation parameters (120 FPS sub-stepping)
const STEP = 1 / 120;
const GRAVITY = 1250;
const DAMPING = 0.992;
const MAX_SPEED = 3.0;
const BEND_MIN = LINK * 1.9;
const BEND_STIFFNESS = 0.8;
const ITERATIONS = 12;

// Stretch and click thresholds
const CLICK_PULL = 13;
const MAX_STRETCH = 22;
const REST_EPSILON = 0.015;
const REST_STEPS = 20;

function damp(distance: number, max: number) {
  return max * (1 - Math.exp(-distance / max));
}

function haptic() {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      navigator.vibrate(10);
    } catch {
      // ignore
    }
  }
}

/**
 * Move points a and b towards `length` apart with bend stiffness.
 */
function relax(
  chain: { xs: Float64Array; ys: Float64Array; held: number },
  a: number,
  b: number,
  length: number,
  bend: boolean
) {
  const { xs, ys, held } = chain;
  const aFixed = a === 0 || a === held;
  const bFixed = b === held;
  if (aFixed && bFixed) return;

  const dx = xs[b] - xs[a];
  const dy = ys[b] - ys[a];
  const dist = Math.hypot(dx, dy) || 0.0001;
  if (bend && dist >= length) return;

  const diff = ((dist - length) / dist) * (bend ? BEND_STIFFNESS : 1);
  let wa = 0.5;
  if (aFixed) {
    wa = 0;
  } else if (bFixed) {
    wa = 1;
  }
  xs[a] += dx * diff * wa;
  ys[a] += dy * diff * wa;
  xs[b] -= dx * diff * (1 - wa);
  ys[b] -= dy * diff * (1 - wa);
}

/** Smooth quadratic curve through Verlet chain points */
function cordPath(xs: Float64Array, ys: Float64Array) {
  let d = `M${xs[0].toFixed(2)} ${ys[0].toFixed(2)}`;
  for (let i = 1; i < xs.length - 1; i++) {
    const mx = (xs[i] + xs[i + 1]) / 2;
    const my = (ys[i] + ys[i + 1]) / 2;
    d += ` Q${xs[i].toFixed(2)} ${ys[i].toFixed(2)} ${mx.toFixed(2)} ${my.toFixed(2)}`;
  }
  const n = xs.length - 1;
  d += ` L${xs[n].toFixed(2)} ${ys[n].toFixed(2)}`;
  return d;
}

function restingChain() {
  const xs = new Float64Array(LINKS + 1);
  const ys = new Float64Array(LINKS + 1);
  for (let i = 0; i <= LINKS; i++) {
    xs[i] = ANCHOR.x;
    ys[i] = ANCHOR.y + i * LINK;
  }
  return { xs, ys };
}

const REST = restingChain();
const REST_PATH = cordPath(REST.xs, REST.ys);

export interface PullCordProps {
  className?: string;
}

export function PullCord({ className }: PullCordProps) {
  const gradientId = useId();
  const { theme, toggleTheme } = useTheme();
  // Checked = true corresponds to Light Mode (Lamp turned ON)
  const isLight = theme === 'light';

  const [focused, setFocused] = useState(false);
  const [grabbing, setGrabbing] = useState(false);

  const svgRef = useRef<SVGSVGElement>(null);
  const cordRef = useRef<SVGPathElement>(null);
  const hitRef = useRef<SVGPathElement>(null);
  const beadRef = useRef<SVGGElement>(null);

  const pointerDownMeta = useRef<{ x: number; y: number; time: number }>({
    x: 0,
    y: 0,
    time: 0,
  });

  const sim = useRef({
    xs: Float64Array.from(REST.xs),
    ys: Float64Array.from(REST.ys),
    pxs: Float64Array.from(REST.xs),
    pys: Float64Array.from(REST.ys),
    raf: 0,
    last: 0,
    carry: 0,
    still: 0,
    held: -1,
    targetX: 0,
    targetY: 0,
    armed: true,
    reduceMotion: false,
  });

  const latest = useRef<{ isLight: boolean; toggle: () => void }>({
    isLight,
    toggle: toggleTheme,
  });

  useEffect(() => {
    latest.current = { isLight, toggle: toggleTheme };
  }, [isLight, toggleTheme]);

  const draw = useCallback(() => {
    const { xs, ys } = sim.current;
    const d = cordPath(xs, ys);
    cordRef.current?.setAttribute('d', d);
    hitRef.current?.setAttribute('d', d);
    const n = LINKS;
    const angle =
      (Math.atan2(xs[n] - xs[n - 1], ys[n] - ys[n - 1]) * 180) / Math.PI;
    beadRef.current?.setAttribute(
      'transform',
      `translate(${xs[n].toFixed(2)} ${ys[n].toFixed(2)}) rotate(${(-angle).toFixed(2)})`
    );
  }, []);

  const integrate = useCallback(() => {
    const s = sim.current;
    const { xs, ys, pxs, pys } = s;
    let moved = 0;
    for (let i = 1; i <= LINKS; i++) {
      if (i === s.held) continue;
      let vx = (xs[i] - pxs[i]) * DAMPING;
      let vy = (ys[i] - pys[i]) * DAMPING;
      const speed = Math.hypot(vx, vy);
      if (speed > MAX_SPEED) {
        vx *= MAX_SPEED / speed;
        vy *= MAX_SPEED / speed;
      }
      pxs[i] = xs[i];
      pys[i] = ys[i];
      xs[i] += vx;
      ys[i] += vy + GRAVITY * STEP * STEP;
      moved = Math.max(moved, Math.abs(vx) + Math.abs(vy));
    }
    if (s.held > 0) {
      const i = s.held;
      moved = Math.max(
        moved,
        Math.abs(s.targetX - xs[i]) + Math.abs(s.targetY - ys[i])
      );
      pxs[i] = xs[i];
      pys[i] = ys[i];
      xs[i] = s.targetX;
      ys[i] = s.targetY;
    }
    return moved;
  }, []);

  const constrain = useCallback(() => {
    const s = sim.current;
    for (let k = 0; k < ITERATIONS; k++) {
      for (let i = 0; i < LINKS; i++) {
        relax(s, i, i + 1, LINK, false);
      }
      for (let i = 0; i + 2 <= LINKS; i++) {
        relax(s, i, i + 2, BEND_MIN, true);
      }
    }
  }, []);

  const step = useCallback(() => {
    const moved = integrate();
    constrain();
    return moved;
  }, [integrate, constrain]);

  const tickRef = useRef<(now: number) => void>(() => {});

  const tick = useCallback(
    (now: number) => {
      const s = sim.current;
      s.raf = 0;
      const elapsed = s.last ? Math.min((now - s.last) / 1000, 0.05) : STEP;
      s.last = now;
      s.carry += elapsed;
      let moved = 0;
      while (s.carry >= STEP) {
        moved = Math.max(moved, step());
        s.carry -= STEP;
      }
      draw();
      s.still = moved < REST_EPSILON ? s.still + 1 : 0;
      if (s.held > 0 || s.still < REST_STEPS) {
        s.raf = requestAnimationFrame((timestamp) => tickRef.current(timestamp));
      } else {
        s.last = 0;
      }
    },
    [draw, step]
  );

  useEffect(() => {
    tickRef.current = tick;
  }, [tick]);

  const wake = useCallback(() => {
    const s = sim.current;
    s.still = 0;
    if (!s.raf) {
      s.raf = requestAnimationFrame((timestamp) => tickRef.current(timestamp));
    }
  }, []);

  useEffect(() => {
    const s = sim.current;
    s.reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    return () => cancelAnimationFrame(s.raf);
  }, []);

  const localPoint = (event: PointerEvent) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    return {
      x: ((event.clientX - rect.left) / rect.width) * WIDTH,
      y: ((event.clientY - rect.top) / rect.height) * HEIGHT,
    };
  };

  const reach = (index: number, x: number, y: number) => {
    const dx = x - ANCHOR.x;
    const dy = y - ANCHOR.y;
    const dist = Math.hypot(dx, dy) || 0.0001;
    const length = index * LINK;
    if (dist <= length) {
      return { x, y, pull: 0 };
    }
    const allowed = length + damp(dist - length, MAX_STRETCH);
    return {
      x: ANCHOR.x + (dx / dist) * allowed,
      y: ANCHOR.y + (dy / dist) * allowed,
      pull: dy > 0 ? (allowed - length) * (dy / dist) : 0,
    };
  };

  const handlePointerDown = (event: PointerEvent<SVGElement>) => {
    const s = sim.current;
    if (s.held > 0) return;
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    event.preventDefault();

    pointerDownMeta.current = {
      x: event.clientX,
      y: event.clientY,
      time: Date.now(),
    };

    const point = localPoint(event);
    let nearest = LINKS;
    let best = Number.POSITIVE_INFINITY;
    for (let i = 1; i <= LINKS; i++) {
      const d = Math.hypot(s.xs[i] - point.x, s.ys[i] - point.y);
      if (d < best) {
        best = d;
        nearest = i;
      }
    }
    svgRef.current?.setPointerCapture(event.pointerId);
    s.held = nearest;
    s.targetX = s.xs[nearest];
    s.targetY = s.ys[nearest];
    s.armed = true;
    setGrabbing(true);
    wake();
  };

  const handlePointerMove = (event: PointerEvent<SVGSVGElement>) => {
    const s = sim.current;
    if (s.held < 0) return;
    const point = localPoint(event);
    const target = reach(s.held, point.x, point.y);
    s.targetX = target.x;
    s.targetY = target.y;

    if (s.armed && target.pull > CLICK_PULL) {
      s.armed = false;
      haptic();
      latest.current.toggle();
    } else if (!s.armed && target.pull < CLICK_PULL * 0.4) {
      s.armed = true;
    }
    wake();
  };

  const handlePointerUp = (event: PointerEvent<SVGSVGElement>) => {
    const s = sim.current;
    if (s.held < 0) return;

    // Check for quick click/tap without drag
    const dist = Math.hypot(
      event.clientX - pointerDownMeta.current.x,
      event.clientY - pointerDownMeta.current.y
    );
    const elapsed = Date.now() - pointerDownMeta.current.time;

    if (dist < 8 && elapsed < 350 && s.armed) {
      haptic();
      latest.current.toggle();
      // Downward impulse on bead for natural visual spring
      s.ys[LINKS] = s.ys[LINKS] + 12;
      s.pys[LINKS] = s.ys[LINKS] - 5;
    }

    s.held = -1;
    setGrabbing(false);

    if (s.reduceMotion) {
      s.xs.set(REST.xs);
      s.ys.set(REST.ys);
      s.pxs.set(REST.xs);
      s.pys.set(REST.ys);
      draw();
      return;
    }
    wake();
  };

  const handleKeyToggle = () => {
    haptic();
    toggleTheme();
    const s = sim.current;
    if (!s.reduceMotion) {
      // Small tug on bead for keyboard feedback
      s.ys[LINKS] = s.ys[LINKS] + 10;
      s.pys[LINKS] = s.ys[LINKS] - 6;
      wake();
    }
  };

  return (
    <div
      className={cn(
        'relative select-none overflow-hidden rounded-xl border transition-all duration-300 ease-out',
        'backdrop-blur-md shadow-lg',
        isLight
          ? 'border-[#e4e4e7] bg-white/90 text-zinc-900 shadow-zinc-200/50'
          : 'border-[#242426] bg-[#090909]/80 text-zinc-100 shadow-black/50',
        className
      )}
      style={{ width: WIDTH, height: HEIGHT }}
    >
      {/* CAD Corner Accents */}
      <span className="absolute top-1.5 left-1.5 font-mono text-[8px] text-zinc-500/70 pointer-events-none select-none">
        +
      </span>
      <span className="absolute top-1.5 right-1.5 font-mono text-[8px] text-zinc-500/70 pointer-events-none select-none">
        +
      </span>

      <svg
        aria-hidden="true"
        className={cn(
          'absolute inset-0 touch-none',
          grabbing ? 'cursor-grabbing' : 'cursor-grab'
        )}
        height={HEIGHT}
        onLostPointerCapture={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        ref={svgRef}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        width={WIDTH}
      >
        <defs>
          {/* Radiant radial glow filter when bulb is illuminated */}
          <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#fde047" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ceiling Cord / Downrod */}
        <line
          className={cn(
            'transition-[stroke] duration-300 ease-out',
            isLight ? 'stroke-zinc-400' : 'stroke-zinc-600'
          )}
          strokeWidth={1.2}
          x1={54}
          x2={54}
          y1={0}
          y2={16}
        />

        {/* Lamp Shade (Industrial Pendant) */}
        <path
          className={cn(
            'transition-[fill,stroke] duration-300 ease-out',
            isLight
              ? 'fill-zinc-800 stroke-zinc-900'
              : 'fill-zinc-800 stroke-zinc-700'
          )}
          strokeWidth={1}
          d="M 44 16 h 20 l 15 18 q 1 2 -2 2 h -50 q -3 0 -2 -2 Z"
        />

        {/* Bulb Illumination Cone / Ambient Glow (Visible in Light Mode) */}
        {isLight && (
          <ellipse
            cx={54}
            cy={42}
            rx={28}
            ry={14}
            fill={`url(#${gradientId})`}
            className="animate-pulse pointer-events-none opacity-90 transition-opacity duration-300"
          />
        )}

        {/* The Lamp Bulb */}
        <path
          className={cn(
            'transition-[fill,filter] duration-300 ease-out',
            isLight
              ? 'fill-amber-300 drop-shadow-[0_0_6px_rgba(251,191,36,0.9)]'
              : 'fill-zinc-700'
          )}
          d="M 47 34 a 7 6.5 0 0 0 14 0 Z"
        />

        {/* Standby Filament Dot in Dark Mode */}
        {!isLight && (
          <circle cx={54} cy={37} r={1.2} fill="#d97706" opacity={0.65} />
        )}

        {/* The Pull Cord Path */}
        <path
          className={cn(
            'transition-[stroke] duration-300 ease-out',
            isLight ? 'stroke-zinc-600' : 'stroke-zinc-400'
          )}
          d={REST_PATH}
          fill="none"
          ref={cordRef}
          strokeLinecap="round"
          strokeWidth={1.2}
        />

        {/* Wide hit-area path for easy dragging */}
        <path
          className={cn(!grabbing && 'cursor-grab')}
          d={REST_PATH}
          fill="none"
          onPointerDown={handlePointerDown}
          pointerEvents="stroke"
          ref={hitRef}
          stroke="transparent"
          strokeWidth={22}
        />

        {/* Machined Bead at end of chain */}
        <g
          className={cn(!grabbing && 'cursor-grab')}
          onPointerDown={handlePointerDown}
          ref={beadRef}
          transform={`translate(${ANCHOR.x} ${ANCHOR.y + LINKS * LINK})`}
        >
          {/* Larger invisible touch circle */}
          <circle fill="transparent" r={16} />

          {/* Focus indicator */}
          {focused && (
            <rect
              className="fill-none stroke-amber-400"
              height={20}
              rx={6}
              strokeWidth={1.5}
              width={14}
              x={-7}
              y={-3}
            />
          )}

          {/* Machined Bead Connector Collar */}
          <circle
            cx={0}
            cy={0}
            r={1.8}
            className={cn(
              'transition-[fill] duration-300 ease-out',
              isLight ? 'fill-zinc-700' : 'fill-zinc-400'
            )}
          />

          {/* Cylinder Bead */}
          <rect
            className={cn(
              'transition-[fill,stroke] duration-300 ease-out',
              isLight
                ? 'fill-zinc-800 stroke-zinc-950'
                : 'fill-zinc-300 stroke-zinc-100'
            )}
            height={13}
            rx={3}
            strokeWidth={0.5}
            width={7.5}
            x={-3.75}
            y={2}
          />
        </g>
      </svg>

      {/* Technical Status Label */}
      <div className="pointer-events-none absolute inset-x-0 bottom-1.5 px-2 text-center select-none">
        <div className="font-mono text-[9px] tracking-wider uppercase font-semibold text-zinc-300 dark:text-zinc-300 light:text-zinc-800">
          {isLight ? 'THEME // LIGHT' : 'THEME // DARK'}
        </div>
        <div className="font-mono text-[8px] text-zinc-500 dark:text-zinc-500 light:text-zinc-500 tracking-tight">
          PULL CORD
        </div>
      </div>

      {/* Accessible switch button for keyboard navigation */}
      <button
        aria-checked={isLight}
        aria-label="Toggle Dark and Light theme"
        className="sr-only"
        onBlur={() => setFocused(false)}
        onClick={handleKeyToggle}
        onFocus={(event) =>
          setFocused(event.currentTarget.matches(':focus-visible'))
        }
        role="switch"
        type="button"
      />
    </div>
  );
}

export default PullCord;
