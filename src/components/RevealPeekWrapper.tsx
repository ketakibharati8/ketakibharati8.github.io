import { useRevealPeek } from '../hooks/useRevealPeek';

interface RevealPeekWrapperProps {
  children: React.ReactNode;
  nextSectionPreview: React.ReactNode;
  peekHeightPercent?: number;
}

export const RevealPeekWrapper: React.FC<RevealPeekWrapperProps> = ({
  children,
  nextSectionPreview,
  peekHeightPercent = 15,
}) => {
  const { containerRef, peekRef, state } = useRevealPeek();

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Main content */}
      <div className="w-full">{children}</div>

      {/* Peek preview at bottom */}
      <div
        ref={peekRef}
        className="relative w-full overflow-hidden bg-gradient-to-t from-gray-900 to-transparent dark:from-black"
        style={{
          height: `${peekHeightPercent}%`,
          backdropFilter: `blur(${8 * (1 - state.scrollProgress)}px)`,
          opacity: Math.min(1, state.scrollProgress + 0.3),
        }}
      >
        {/* Blurred preview */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            filter: `blur(${12 * (1 - state.scrollProgress)}px) brightness(${0.6 + state.scrollProgress * 0.4})`,
            transform: `translateY(${20 * (1 - state.scrollProgress)}px)`,
          }}
        >
          {nextSectionPreview}
        </div>

        {/* Scroll hint chevron */}
        {state.scrollProgress < 0.8 && (
          <div
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce"
            style={{
              opacity: 1 - state.scrollProgress,
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
