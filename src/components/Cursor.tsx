import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Add trail
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ };
      setTrails((prev) => [...prev.slice(-15), newTrail]);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setTrails([]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Trail dots */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="pointer-events-none fixed w-1 h-1 bg-blue-500 rounded-full"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: (index / trails.length) * 0.5,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Main cursor */}
      {isVisible && (
        <div
          className="pointer-events-none fixed w-4 h-4 border-2 border-blue-500 rounded-full mix-blend-screen"
          style={{
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.2s ease-out',
          }}
        />
      )}
    </>
  );
};

export default Cursor;
