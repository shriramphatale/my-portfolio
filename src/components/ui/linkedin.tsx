import { motion, useAnimation, useReducedMotion, type Variants } from 'framer-motion';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '../../lib/utils';

export interface LinkedinIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface LinkedinIconProps extends HTMLAttributes<HTMLSpanElement> {
  size?: number;
}

const PATH_VARIANTS: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 0.2 },
  },
  animate: {
    opacity: [0.5, 1],
    pathLength: [0.6, 1],
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

const RECT_VARIANTS: Variants = {
  normal: {
    y: 0,
    transition: { duration: 0.2 },
  },
  animate: {
    y: [-1, 1.5, 0],
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

const CIRCLE_VARIANTS: Variants = {
  normal: {
    scale: 1,
    transition: { duration: 0.2 },
  },
  animate: {
    scale: [1, 1.2, 1],
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

const LinkedinIcon = forwardRef<LinkedinIconHandle, LinkedinIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 20, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);
    const shouldReduceMotion = useReducedMotion();

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;
      return {
        startAnimation: () => {
          if (!shouldReduceMotion) controls.start('animate');
        },
        stopAnimation: () => controls.start('normal'),
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLSpanElement>) => {
        if (isControlledRef.current) {
          onMouseEnter?.(e);
        } else if (!shouldReduceMotion) {
          controls.start('animate');
        }
      },
      [onMouseEnter, controls, shouldReduceMotion]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLSpanElement>) => {
        if (isControlledRef.current) {
          onMouseLeave?.(e);
        } else {
          controls.start('normal');
        }
      },
      [onMouseLeave, controls]
    );

    return (
      <span
        className={cn('inline-flex items-center justify-center select-none', className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <motion.path
            animate={controls}
            initial="normal"
            variants={PATH_VARIANTS}
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          />
          <motion.rect
            animate={controls}
            initial="normal"
            variants={RECT_VARIANTS}
            width="4"
            height="12"
            x="2"
            y="9"
          />
          <motion.circle
            animate={controls}
            initial="normal"
            variants={CIRCLE_VARIANTS}
            cx="4"
            cy="4"
            r="2"
          />
        </svg>
      </span>
    );
  }
);

LinkedinIcon.displayName = 'LinkedinIcon';

export { LinkedinIcon };
