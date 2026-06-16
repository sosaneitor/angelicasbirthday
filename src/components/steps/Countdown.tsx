import { motion } from 'framer-motion';
import TurtleAnimated from '../TurtleAnimated';
import './Countdown.css';

interface CountdownProps {
  timeLeft: { days: number; hours: number; minutes: number; seconds: number };
}

export default function Countdown({ timeLeft }: CountdownProps) {
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="countdown-screen">
      <div className="countdown-content">
        <TurtleAnimated size={120} />

        <motion.h2
          className="countdown-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Algo especial se acerca...
        </motion.h2>

        <motion.div
          className="countdown-timer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="time-unit">
            <span className="time-value">{pad(timeLeft.days)}</span>
            <span className="time-label">días</span>
          </div>
          <span className="time-sep">:</span>
          <div className="time-unit">
            <span className="time-value">{pad(timeLeft.hours)}</span>
            <span className="time-label">horas</span>
          </div>
          <span className="time-sep">:</span>
          <div className="time-unit">
            <span className="time-value">{pad(timeLeft.minutes)}</span>
            <span className="time-label">min</span>
          </div>
          <span className="time-sep">:</span>
          <div className="time-unit">
            <span className="time-value">{pad(timeLeft.seconds)}</span>
            <span className="time-label">seg</span>
          </div>
        </motion.div>

        <motion.p
          className="countdown-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0.4, 0.7] }}
          transition={{ delay: 1.5, duration: 3, repeat: Infinity }}
        >
          ✨ Ten paciencia, algo mágico te espera... ✨
        </motion.p>
      </div>
    </div>
  );
}
