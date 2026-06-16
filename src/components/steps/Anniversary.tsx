import { motion } from 'framer-motion';
import NextButton from '../NextButton';
import './Anniversary.css';

interface AnniversaryProps {
  onNext: () => void;
}

const milestones = [
  { year: '2020', text: 'Donde todo comenzó 💫', icon: '💕' },
  { year: '2022', text: 'Construyendo sueños juntos 🏠', icon: '✨' },
  { year: '2025', text: 'Llegó Cyan, nuestro mar 🐢', icon: '👶' },
  { year: '2026', text: '6 años y contando... 💍', icon: '🌊' },
];

export default function Anniversary({ onNext }: AnniversaryProps) {
  return (
    <div className="anniversary-screen">
      <div className="anniversary-content">
        <motion.div
          className="anniversary-heart"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.span
            animate={{ scale: [1, 1.15, 1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
          >
            ❤️
          </motion.span>
        </motion.div>

        <motion.h2
          className="anniversary-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          6 Años Juntos
        </motion.h2>

        <motion.p
          className="anniversary-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          15 de Julio de 2020 — 15 de Julio de 2026
        </motion.p>

        <div className="timeline">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              className="timeline-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.4, duration: 0.6 }}
            >
              <div className="timeline-dot">{m.icon}</div>
              <div className="timeline-info">
                <span className="timeline-year">{m.year}</span>
                <span className="timeline-text">{m.text}</span>
              </div>
            </motion.div>
          ))}
          <div className="timeline-line" />
        </div>

        <motion.p
          className="anniversary-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          6 años amándote, y esto es solo el comienzo ∞
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
        >
          <NextButton onClick={onNext} text="Hay más... →" variant="gold" delay={0} />
        </motion.div>
      </div>
    </div>
  );
}
