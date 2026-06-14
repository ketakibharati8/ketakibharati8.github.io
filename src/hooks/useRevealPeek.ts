import { useEffect, useRef, useState } from 'react';

interface RevealPeekState {
  scrollProgress: number;
}

export const useRevealPeek = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const peekRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealPeekState>({
    scrollProgress: 0,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const rect = containerRef.current?.getBoundingClientRect();
          const scrollProgress = rect ? Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight)) : 0;

          setState({
            scrollProgress,
          });
        }
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i / 10) }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return { containerRef, peekRef, state };
};
