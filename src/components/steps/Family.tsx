import { motion } from 'framer-motion';
import NextButton from '../NextButton';
import './Family.css';

interface FamilyProps {
  onNext: () => void;
}

export default function Family({ onNext }: FamilyProps) {
  return (
    <div className="family-screen">
      <div className="family-content">
        <motion.div
          className="family-turtle-big"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
        >
          <motion.span
            animate={{
              x: [0, 8, 0, -8, 0],
              y: [0, -5, -10, -5, 0],
              rotate: [0, 3, 0, -3, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            🐢
          </motion.span>
        </motion.div>

        <motion.h2
          className="family-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Nuestra tortuguita
        </motion.h2>

        <motion.div
          className="family-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="family-photo-placeholder">
            <span>📸</span>
            <small>Foto familiar</small>
          </div>
        </motion.div>

        <motion.div
          className="family-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="family-cyan-name">
            <span className="cyan-letter">C</span>
            <span className="cyan-letter">y</span>
            <span className="cyan-letter">a</span>
            <span className="cyan-letter">n</span>
          </p>
          <p className="family-meaning">
            Su nombre nació del azul infinito del mar 🌊
          </p>
          <p className="family-age">
            Nuestra tortuguita cumple <strong>10 mesecitos</strong> el 13 de julio 💙
          </p>
        </motion.div>

        <motion.p
          className="family-quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          "Los tres juntos somos un océano de amor"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <NextButton onClick={onNext} text="¿Lista para la sorpresa? →" variant="coral" delay={0} />
        </motion.div>
      </div>
    </div>
  );
}
