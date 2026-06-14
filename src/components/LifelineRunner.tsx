import React from 'react';
import { motion } from 'framer-motion';

const LIFE_PHASES = [
  { stage: 'birth', label: '2003: Born', icon: '👶', color: '#fbbf24' },
  { stage: 'childhood', label: 'Childhood', icon: '🏃', color: '#f97316' },
  { stage: 'learning', label: 'Teen Learning', icon: '💻', color: '#06b6d4' },
  { stage: 'engineering', label: 'Engineering', icon: '🎓', color: '#3b82f6' },
  { stage: 'projects', label: 'Building Projects', icon: '⚙️', color: '#8b5cf6' },
  { stage: 'corporate', label: 'Corporate', icon: '🚀', color: '#ec4899' },
];

export const LifelineRunner: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Calculate which phase we're in based on scroll progress
  const phaseIndex = Math.min(Math.floor(scrollProgress * (LIFE_PHASES.length - 1)), LIFE_PHASES.length - 1);
  const currentPhase = LIFE_PHASES[phaseIndex];
  const nextPhase = LIFE_PHASES[Math.min(phaseIndex + 1, LIFE_PHASES.length - 1)];

  // Position of the runner along the progress bar (0-100%)
  const runnerPosition = scrollProgress * 100;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const runnerVariants = {
    initial: { scale: 0.8, y: 10 },
    animate: {
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  };

  // SVG character that morphs through phases
  const renderCharacter = () => {
    const baseProps = {
      className: 'w-12 h-12',
      viewBox: '0 0 40 40',
      xmlns: 'http://www.w3.org/2000/svg',
    };

    if (prefersReducedMotion) {
      // Fallback: static icon for reduced motion
      return (
        <div className="flex items-center justify-center w-12 h-12 text-2xl">
          {currentPhase.icon}
        </div>
      );
    }

    // Morphing SVG character based on phase
    return (
      <svg {...baseProps}>
        <defs>
          <linearGradient id="charGrad" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor={currentPhase.color} />
            <stop offset="100%" stopColor={nextPhase.color} />
          </linearGradient>
        </defs>

        {/* Head */}
        <motion.circle
          cx="20"
          cy="10"
          r={phaseIndex < 2 ? '5' : '6'}
          fill="url(#charGrad)"
          animate={{ r: phaseIndex < 2 ? 5 : 6 }}
          transition={{ duration: 0.3 }}
        />

        {/* Body */}
        <motion.rect
          x={phaseIndex < 2 ? '16' : '15'}
          y="16"
          width={phaseIndex < 2 ? '8' : '10'}
          height={phaseIndex < 2 ? '10' : '12'}
          fill="url(#charGrad)"
          animate={{
            x: phaseIndex < 2 ? 16 : 15,
            y: 16,
            width: phaseIndex < 2 ? 8 : 10,
            height: phaseIndex < 2 ? 10 : 12,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Left arm (running motion) */}
        <motion.line
          x1="16"
          y1="18"
          x2={phaseIndex < 2 ? '12' : '10'}
          y2={phaseIndex < 2 ? '22' : '24'}
          stroke="url(#charGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{
            x2: phaseIndex < 2 ? 12 : 10,
            y2: phaseIndex < 2 ? 22 : 24,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Right arm (counterbalance) */}
        <motion.line
          x1="24"
          y1="18"
          x2={phaseIndex < 2 ? '28' : '30'}
          y2={phaseIndex < 2 ? '22' : '24'}
          stroke="url(#charGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{
            x2: phaseIndex < 2 ? 28 : 30,
            y2: phaseIndex < 2 ? 22 : 24,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Left leg (stride) */}
        <motion.line
          x1="17"
          y1="28"
          x2={phaseIndex < 2 ? '14' : '16'}
          y2="35"
          stroke="url(#charGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{
            x2: phaseIndex < 2 ? 14 : 16,
            y2: 35,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Right leg (stride) */}
        <motion.line
          x1="23"
          y1="28"
          x2={phaseIndex < 2 ? '26' : '24'}
          y2="35"
          stroke="url(#charGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{
            x2: phaseIndex < 2 ? 26 : 24,
            y2: 35,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Optional: phase badge */}
        <text
          x="20"
          y="38"
          textAnchor="middle"
          fontSize="6"
          fill={currentPhase.color}
          fontWeight="bold"
        >
          {phaseIndex + 1}
        </text>
      </svg>
    );
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">
      {/* Sticky progress bar container */}
      <div className="sticky top-16 z-40 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 lg:px-8 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto">
          {/* Phase label */}
          <div className="mb-2 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white intense-heading">
                Lifeline Runner: {currentPhase.label}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Phase {phaseIndex + 1} of {LIFE_PHASES.length}</p>
            </div>
          </div>

          {/* Progress bar track */}
          <div className="relative w-full h-16 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
            {/* Animated background fill */}
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20"
              style={{ width: `${runnerPosition}%` }}
              transition={{ type: 'spring', damping: 30, stiffness: 100 }}
            />

            {/* Phase markers */}
            {LIFE_PHASES.map((phase, idx) => {
              const position = (idx / (LIFE_PHASES.length - 1)) * 100;
              return (
                <div
                  key={idx}
                  className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
                  style={{ left: `${position}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"
                    animate={{
                      scale: idx <= phaseIndex ? 1.8 : 1,
                      backgroundColor: idx <= phaseIndex ? phase.color : '#9ca3af',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <span
                    className="text-xs font-semibold mt-1 px-1 py-0.5 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    style={{
                      color: idx <= phaseIndex ? phase.color : '#6b7280',
                      fontSize: '10px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {idx + 1}
                  </span>
                </div>
              );
            })}

            {/* Runner character */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
              style={{
                left: `${runnerPosition}%`,
                transform: 'translateX(-50%) translateY(-50%)',
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 80 }}
            >
              <motion.div variants={runnerVariants} initial="initial" animate="animate">
                <div className="flex flex-col items-center">
                  {renderCharacter()}
                  <div className="absolute -bottom-6 text-center">
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-2 py-0.5 rounded whitespace-nowrap">
                      {Math.round(scrollProgress * 100)}%
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LifelineRunner;
