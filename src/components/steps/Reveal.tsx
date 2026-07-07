import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import NextButton from '../NextButton';
import { haptic } from '../../utils/haptics';
import './Reveal.css';

interface RevealProps {
  onNext: () => void;
}

export default function Reveal({ onNext }: RevealProps) {
  const hasConfetti = useRef(false);

  useEffect(() => {
    if (hasConfetti.current) return;
    hasConfetti.current = true;

    // Big reveal confetti burst
    setTimeout(() => {
      haptic('reveal');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06B6D4', '#FB7185', '#FDE68A', '#5EEAD4', '#67E8F9'],
      });
    }, 600);

    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.65 },
        colors: ['#06B6D4', '#FDE68A'],
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.65 },
        colors: ['#FB7185', '#5EEAD4'],
      });
    }, 1200);
  }, []);

  return (
    <div className="reveal-screen">
      <div className="reveal-content">
        <motion.div
          className="reveal-plane"
          initial={{ x: '-100vw', y: 50, rotate: -10 }}
          animate={{ x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          ✈️
        </motion.div>

        <motion.h1
          className="reveal-title"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6, type: 'spring', bounce: 0.4 }}
        >
          ¡NOS VAMOS A<br />
          <span className="reveal-destination">SANTA MARTA!</span>
        </motion.h1>

        <motion.div
          className="reveal-emojis"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          🏖️ 🌊 🐢 ☀️ 🌴
        </motion.div>

        <motion.p
          className="reveal-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          Los tres juntos: <strong>Sebas, Angelica y Cyan</strong>
        </motion.p>

        <motion.div
          className="reveal-dates"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className="reveal-date-range">12 — 15 de Julio 2026</span>
          <span className="reveal-days">4 días de playa, sol y familia 🌅</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <NextButton onClick={onNext} text="Ver los detalles →" variant="gold" delay={0} />
        </motion.div>
      </div>
    </div>
  );
}
