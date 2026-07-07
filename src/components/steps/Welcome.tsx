import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import NextButton from '../NextButton';
import { haptic } from '../../utils/haptics';
import './Welcome.css';

interface WelcomeProps {
  onNext: () => void;
}

export default function Welcome({ onNext }: WelcomeProps) {
  const hasConfetti = useRef(false);

  useEffect(() => {
    if (hasConfetti.current) return;
    hasConfetti.current = true;

    haptic('success');
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#06B6D4', '#FB7185', '#FDE68A', '#67E8F9', '#5EEAD4'];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    setTimeout(frame, 300);
  }, []);

  return (
    <div className="welcome-screen">
      <motion.div
        className="welcome-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="welcome-cake"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: 'spring', bounce: 0.5 }}
        >
          🎂
        </motion.div>

        <motion.h1
          className="welcome-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          ¡Feliz Cumpleaños,<br />
          <span className="welcome-name">Angelica!</span>
        </motion.h1>

        <motion.p
          className="welcome-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          27 años de una mujer increíble
        </motion.p>

        <motion.div
          className="welcome-stars"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          ✨ 🐢 ✨
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <NextButton onClick={onNext} text="Descubre tu regalo →" variant="coral" delay={0} />
        </motion.div>
      </motion.div>
    </div>
  );
}
