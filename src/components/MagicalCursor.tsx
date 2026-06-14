import { useMagicalCursor } from '../hooks/useMagicalCursor';

export const MagicalCursor: React.FC<{ enabled?: boolean }> = ({ enabled = true }) => {
  const { canvasRef, shouldRender } = useMagicalCursor(enabled);

  if (!shouldRender) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ cursor: 'none' }}
    />
  );
};
