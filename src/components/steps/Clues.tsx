import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NextButton from '../NextButton';
import './Clues.css';

interface CluesProps {
  onNext: () => void;
}

const clues = [
  { emoji: '🌊', text: 'Hay olas...' },
  { emoji: '☀️', text: 'Hay sol...' },
  { emoji: '🏖️', text: 'Hay playa...' },
  { emoji: '🐢', text: 'Hay tortuguitas...' },
  { emoji: '✈️', text: '¡Hay vuelo!' },
];

export default function Clues({ onNext }: CluesProps) {
  const [visibleClues, setVisibleClues] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [dodgeCount, setDodgeCount] = useState(0);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const allRevealed = visibleClues >= clues.length;

  const revealNext = useCallback(() => {
    if (visibleClues < clues.length) {
      setVisibleClues(v => v + 1);
      if (visibleClues + 1 >= clues.length) {
        setTimeout(() => setShowButton(true), 600);
      }
    }
  }, [visibleClues]);

  const handleButtonClick = () => {
    if (dodgeCount < 3) {
      setDodgeCount(d => d + 1);
      const maxX = 100;
      const maxY = 60;
      setButtonPos({
        x: (Math.random() - 0.5) * maxX,
        y: (Math.random() - 0.5) * maxY,
      });
    } else {
      onNext();
    }
  };

  return (
    <div className="clues-screen" ref={containerRef}>
      <div className="clues-content">
        <motion.h2
          className="clues-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {allRevealed ? '¿Ya adivinas?' : 'Unas pistas...'}
        </motion.h2>

        <div className="clues-list">
          {clues.map((clue, i) => (
            <AnimatePresence key={i}>
              {i < visibleClues && (
                <motion.div
                  className="clue-item"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', bounce: 0.4, duration: 0.7 }}
                >
                  <span className="clue-emoji">{clue.emoji}</span>
                  <span className="clue-text">{clue.text}</span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {!allRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <NextButton onClick={revealNext} text="Siguiente pista 👀" delay={0} />
          </motion.div>
        )}

        <AnimatePresence>
          {showButton && (
            <motion.div
              className="dodge-wrapper"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: buttonPos.x,
                y: buttonPos.y,
              }}
              transition={{ type: 'spring', bounce: 0.6, duration: 0.5 }}
            >
              <button className="dodge-btn" onClick={handleButtonClick}>
                {dodgeCount < 3 ? '¡Descúbrelo! 🎁' : '¡¡DESCÚBRELO!! 🎉'}
              </button>
              {dodgeCount > 0 && dodgeCount < 3 && (
                <motion.span
                  className="dodge-taunt"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {dodgeCount === 1 ? '¡Jaja casi!' : '¡Ay atrápame!'}
                </motion.span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
