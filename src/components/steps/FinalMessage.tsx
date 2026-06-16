import { motion } from 'framer-motion';
import './FinalMessage.css';

interface FinalMessageProps {
  onRestart: () => void;
}

export default function FinalMessage({ onRestart }: FinalMessageProps) {
  return (
    <div className="final-screen">
      <div className="final-content">
        <motion.div
          className="final-turtle"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
        >
          <motion.span
            animate={{
              x: [0, 10, 0, -10, 0],
              y: [0, -5, -10, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            🐢
          </motion.span>
        </motion.div>

        <motion.h2
          className="final-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Felices 27, mi amor
        </motion.h2>

        <motion.div
          className="final-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p>
            Este viaje es más que un destino — es la promesa de que cada aventura a tu lado es el mejor regalo que la vida me da.
          </p>
          <p>
            Santa Marta nos espera. El mar nos llama. Y Cyan va a conocer de dónde viene su nombre. 🌊
          </p>
          <p>
            Felices 6 años juntos. Felices 27 vueltas al sol. Feliz todo lo que viene.
          </p>
        </motion.div>

        <motion.div
          className="final-signature"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p className="final-sign-text">Con todo mi amor,</p>
          <p className="final-sign-name">Sebastian & Cyan 🐢💙</p>
        </motion.div>

        <motion.div
          className="final-wave-emoji"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{
              x: [0, 300],
              y: [0, -20],
              scale: [1, 0.4],
              opacity: [1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
            className="swimming-turtle"
          >
            🐢
          </motion.div>
          <div className="horizon-line" />
        </motion.div>

        <motion.button
          className="restart-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 3, duration: 1 }}
          onClick={onRestart}
          whileHover={{ opacity: 1 }}
        >
          Volver a vivir la experiencia 🔄
        </motion.button>
      </div>
    </div>
  );
}
