import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface StepNavigatorProps {
  currentStep: number;
  children: ReactNode;
}

const variants = {
  enter: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.96,
  },
};

export default function StepNavigator({ currentStep, children }: StepNavigatorProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStep}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          width: '100%',
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          boxSizing: 'border-box',
          paddingTop: 'calc(env(safe-area-inset-top, 0px) + 30px)',
          paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 8px)',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
