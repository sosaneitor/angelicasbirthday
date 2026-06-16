import { motion } from 'framer-motion';
import './TurtleAnimated.css';

interface TurtleAnimatedProps {
  size?: number;
}

export default function TurtleAnimated({ size = 100 }: TurtleAnimatedProps) {
  return (
    <motion.div
      className="turtle-container"
      style={{ width: size, height: size }}
      animate={{
        x: [0, 12, 0, -12, 0],
        y: [0, -6, -12, -6, 0],
        rotate: [0, 3, 0, -3, 0],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="turtle-svg"
      >
        {/* Shell */}
        <ellipse cx="60" cy="52" rx="32" ry="26" className="turtle-shell" />
        <ellipse cx="60" cy="48" rx="28" ry="22" className="turtle-shell-top" />
        
        {/* Shell pattern */}
        <path d="M60 28 L60 70" className="turtle-pattern" />
        <path d="M40 38 Q60 52 80 38" className="turtle-pattern" />
        <path d="M38 55 Q60 45 82 55" className="turtle-pattern" />
        
        {/* Head */}
        <motion.g
          animate={{ x: [0, 2, 0, -1, 0], y: [0, -1, 0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ellipse cx="95" cy="48" rx="12" ry="10" className="turtle-head" />
          {/* Eyes */}
          <circle cx="99" cy="44" r="3" className="turtle-eye" />
          <circle cx="99" cy="44" r="1.5" fill="#1a1a2e" />
          {/* Smile */}
          <path d="M96 51 Q99 54 102 51" stroke="#1a1a2e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </motion.g>
        
        {/* Legs */}
        <motion.ellipse
          cx="40" cy="68" rx="8" ry="5"
          className="turtle-leg"
          animate={{ rotate: [0, -10, 0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.ellipse
          cx="80" cy="68" rx="8" ry="5"
          className="turtle-leg"
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.ellipse
          cx="42" cy="36" rx="7" ry="4"
          className="turtle-leg"
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.ellipse
          cx="78" cy="36" rx="7" ry="4"
          className="turtle-leg"
          animate={{ rotate: [0, -10, 0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
        
        {/* Tail */}
        <motion.path
          d="M28 52 Q22 52 20 48"
          className="turtle-tail"
          animate={{ d: ['M28 52 Q22 52 20 48', 'M28 52 Q22 54 20 50', 'M28 52 Q22 52 20 48'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
      
      {/* Bubble particles */}
      <div className="turtle-bubbles">
        <span className="turtle-bubble" style={{ animationDelay: '0s' }} />
        <span className="turtle-bubble" style={{ animationDelay: '1.5s' }} />
        <span className="turtle-bubble" style={{ animationDelay: '3s' }} />
      </div>
    </motion.div>
  );
}
