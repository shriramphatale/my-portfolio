import React, { useEffect, useRef } from 'react';

export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    let particles = [];
    let animationFrameId;

    // Scroll parallax tracking with smooth momentum interpolation (lerp)
    let currentScrollY = window.scrollY;
    let targetScrollY = window.scrollY;
    let lastScrollY = window.scrollY;

    // Mouse tracking
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 140,
    };

    const PARTICLE_COUNT = 140;
    const STAR_COLORS = [
      '#ffffff',
      '#ffffff',
      '#f4f4f5',
      '#ef233c',
      '#ff4d6d',
      '#ff758f',
      '#e4e4e7',
    ];

    function resize() {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);
    }

    class ParallaxParticle {
      constructor() {
        this.depth = Math.random() * 0.9 + 0.2; // 0.2 = background, 1.1 = foreground
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : (Math.random() > 0.5 ? -10 : height + 10);
        // Small, fine particle sizing: 0.5px to 1.35px
        this.baseSize = this.depth * 0.85 + 0.35;
        this.size = this.baseSize;

        // Ambient floating drift
        this.vx = (Math.random() - 0.5) * 0.16 * this.depth;
        this.vy = (Math.random() * 0.2 + 0.05) * this.depth;

        this.color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
        this.isRed = this.color === '#ef233c' || this.color === '#ff4d6d' || this.color === '#ff758f';

        this.alpha = Math.random() * 0.5 + 0.35 * this.depth;
        this.baseAlpha = this.alpha;
        this.pulseSpeed = Math.random() * 0.02 + 0.008;
        this.pulseDir = Math.random() > 0.5 ? 1 : -1;
      }

      update(scrollDelta, mouseVelocityX, mouseVelocityY) {
        // 1. Ambient drift
        this.x += this.vx;
        this.y += this.vy;

        // 2. Parallax scroll displacement based on layer depth
        this.y -= scrollDelta * this.depth * 0.85;
        this.x -= mouseVelocityX * this.depth * 0.06;

        // 3. Twinkle pulse
        this.alpha += this.pulseSpeed * this.pulseDir;
        if (this.alpha >= 0.95) {
          this.alpha = 0.95;
          this.pulseDir = -1;
        } else if (this.alpha <= 0.25) {
          this.alpha = 0.25;
          this.pulseDir = 1;
        }

        // 4. Mouse proximity interaction
        if (mouse.x > 0 && mouse.y > 0) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.6 * this.depth;
            this.y -= (dy / dist) * force * 1.6 * this.depth;
          }
        }

        // 5. Infinite wrap-around bounds
        if (this.y < -30) {
          this.y = height + 20;
          this.x = Math.random() * width;
        } else if (this.y > height + 30) {
          this.y = -20;
          this.x = Math.random() * width;
        }

        if (this.x < -30) {
          this.x = width + 20;
        } else if (this.x > width + 30) {
          this.x = -20;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.min(1, Math.max(0, this.alpha));
        ctx.fillStyle = this.color;

        if (this.isRed) {
          ctx.shadowColor = '#ef233c';
          ctx.shadowBlur = 4 * this.depth;
        } else {
          ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
          ctx.shadowBlur = 2 * this.depth;
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function init() {
      resize();
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new ParallaxParticle());
      }
    }

    let prevMouseX = 0;
    let prevMouseY = 0;

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Smooth scroll interpolation (momentum lerp)
      currentScrollY += (targetScrollY - currentScrollY) * 0.12;
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      const mouseVelocityX = mouse.x - prevMouseX;
      const mouseVelocityY = mouse.y - prevMouseY;
      prevMouseX = mouse.x;
      prevMouseY = mouse.y;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(scrollDelta, mouseVelocityX, mouseVelocityY);
        particles[i].draw();
      }

      // Constellation connection lines near mouse
      if (mouse.x > 0 && mouse.y > 0) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particles[i].x, particles[i].y);
            ctx.strokeStyle = particles[i].isRed
              ? 'rgba(239, 35, 60, 0.35)'
              : 'rgba(255, 255, 255, 0.12)';
            ctx.lineWidth = 0.8 * particles[i].depth;
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    function handleScroll() {
      targetScrollY = window.scrollY;
    }

    function handleMouseMove(e) {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    }

    function handleMouseLeave() {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    }

    window.addEventListener('resize', init);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', init);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none w-full h-full"
      aria-hidden="true"
    />
  );
}
