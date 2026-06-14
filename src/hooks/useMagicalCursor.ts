import { useEffect, useRef, useState } from 'react';

interface CursorState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  isActive: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export const useMagicalCursor = (enabled = true) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorState = useRef<CursorState>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    isActive: false,
  });
  const particles = useRef<Particle[]>([]);
  const [isReduced, setIsReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const animationFrameId = useRef<number>();

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReduced(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsReduced(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Detect mobile / touch
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|Android|Mobile/.test(navigator.userAgent) || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Setup canvas and cursor tracking
  useEffect(() => {
    if (!enabled || isMobile || isReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorState.current.targetX = e.clientX;
      cursorState.current.targetY = e.clientY;
      cursorState.current.isActive = true;

      // Add particle
      if (Math.random() > 0.7) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 1,
          life: 1,
          maxLife: 1,
        });
      }
    };

    const handleMouseLeave = () => {
      cursorState.current.isActive = false;
    };

    const animate = () => {
      const state = cursorState.current;

      // Easing cursor movement
      state.x += (state.targetX - state.x) * 0.2;
      state.y += (state.targetY - state.y) * 0.2;

      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spotlight reveal effect
      if (state.isActive) {
        const spotlightRadius = 120;
        const gradient = ctx.createRadialGradient(
          state.x,
          state.y,
          spotlightRadius * 0.3,
          state.x,
          state.y,
          spotlightRadius
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Draw particles
      particles.current = particles.current.filter((p) => {
        p.life -= 0.02;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.1; // gravity

        if (p.life > 0) {
          ctx.fillStyle = `rgba(59, 130, 246, ${p.life * 0.3})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fill();
          return true;
        }
        return false;
      });

      // Draw micro-pointer
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(state.x, state.y, 4, 0, Math.PI * 2);
      ctx.fill();

      // Draw outer ring on active
      if (state.isActive) {
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(state.x, state.y, 12, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [enabled, isMobile, isReduced]);

  return { canvasRef, shouldRender: enabled && !isMobile && !isReduced };
};
