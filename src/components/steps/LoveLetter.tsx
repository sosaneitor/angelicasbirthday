import { motion } from 'framer-motion';
import NextButton from '../NextButton';
import './LoveLetter.css';

interface LoveLetterProps {
  onNext: () => void;
}

const paragraphs = [
  'Mi amor,',
  'Hoy el mundo celebra el día en que llegaste a llenarlo todo de luz. Hace 27 años nació la mujer que cambiaría mi vida para siempre.',
  'Eres la mamá más hermosa que Cyan pudo tener, la compañera que siempre soñé, y la persona que hace que cada día valga la pena.',
  'Este regalo no es solo un viaje... es una promesa de que siempre vamos a buscar juntos nuevos horizontes, nuevas olas, nuevas aventuras.',
  'Te amo infinito. 💙',
];

export default function LoveLetter({ onNext }: LoveLetterProps) {
  return (
    <div className="letter-screen">
      <div className="letter-content">
        <motion.div
          className="letter-icon"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
        >
          💌
        </motion.div>

        <div className="letter-text">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              className={i === 0 ? 'letter-greeting' : 'letter-paragraph'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.5, duration: 0.8 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="letter-signature"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          — Sebastian
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
        >
          <NextButton onClick={onNext} text="Sigue descubriendo →" />
        </motion.div>
      </div>
    </div>
  );
}
