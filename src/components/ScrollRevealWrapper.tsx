import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealWrapperProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export const ScrollRevealWrapper: React.FC<ScrollRevealWrapperProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
}) => {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
    once: true,
  });

  const directionVariants = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
  };

  const initialVariant = directionVariants[direction];
  const animateVariant = { x: 0, y: 0, opacity: 1 };

  return (
    <motion.div
      ref={ref}
      initial={initialVariant}
      animate={isVisible ? animateVariant : initialVariant}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};
