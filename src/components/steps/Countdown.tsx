import { motion } from 'framer-motion';
import TurtleAnimated from '../TurtleAnimated';
import './Countdown.css';

interface CountdownProps {
  timeLeft: { days: number; hours: number; minutes: number; seconds: number };
}

const miniTurtles = [
  { id: 1, x: '8%', y: '15%', size: 40, delay: 0, duration: 7, direction: 1 },
  { id: 2, x: '78%', y: '22%', size: 35, delay: 1.5, duration: 9, direction: -1 },
  { id: 3, x: '15%', y: '72%', size: 30, delay: 3, duration: 8, direction: 1 },
  { id: 4, x: '82%', y: '75%', size: 38, delay: 0.8, duration: 10, direction: -1 },
  { id: 5, x: '50%', y: '85%', size: 28, delay: 2, duration: 7.5, direction: 1 },
  { id: 6, x: '25%', y: '90%', size: 32, delay: 4, duration: 8.5, direction: -1 },
];

const sparkles = [
  { id: 1, x: '20%', y: '20%', delay: 0 },
  { id: 2, x: '75%', y: '15%', delay: 1.2 },
  { id: 3, x: '85%', y: '60%', delay: 2.5 },
  { id: 4, x: '10%', y: '55%', delay: 3.8 },
  { id: 5, x: '60%', y: '80%', delay: 0.8 },
  { id: 6, x: '40%', y: '12%', delay: 2 },
  { id: 7, x: '90%', y: '40%', delay: 1.5 },
  { id: 8, x: '5%', y: '40%', delay: 3 },
];

export default function Countdown({ timeLeft }: CountdownProps) {
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="countdown-screen">
      {/* Mini turtles swimming in background */}
      <div className="mini-turtles-layer">
        {miniTurtles.map((t) => (
          <motion.div
            key={t.id}
            className="mini-turtle"
            style={{
              left: t.x,
              top: t.y,
              width: t.size,
              height: t.size,
              transform: `scaleX(${t.direction})`,
            }}
            animate={{
              x: [0, 30 * t.direction, 0, -20 * t.direction, 0],
              y: [0, -10, -18, -8, 0],
              rotate: [0, 5 * t.direction, 0, -3 * t.direction, 0],
            }}
            transition={{
              duration: t.duration,
              delay: t.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <TurtleAnimated size={t.size} />
          </motion.div>
        ))}
      </div>

      {/* Sparkles */}
      <div className="sparkles-layer">
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            className="sparkle-dot"
            style={{ left: s.x, top: s.y }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2.5,
              delay: s.delay,
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      <div className="countdown-content">
        {/* Main turtle - bigger and centered */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', bounce: 0.5, duration: 1.2 }}
        >
          <TurtleAnimated size={140} />
        </motion.div>

        <motion.h2
          className="countdown-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Algo especial se acerca...
        </motion.h2>

        <motion.p
          className="countdown-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Un regalo te está esperando 🎁
        </motion.p>

        <motion.div
          className="countdown-timer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="time-unit">
            <motion.span
              className="time-value"
              key={`d-${timeLeft.days}`}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {pad(timeLeft.days)}
            </motion.span>
            <span className="time-label">días</span>
          </div>
          <span className="time-sep">:</span>
          <div className="time-unit">
            <motion.span
              className="time-value"
              key={`h-${timeLeft.hours}`}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {pad(timeLeft.hours)}
            </motion.span>
            <span className="time-label">horas</span>
          </div>
          <span className="time-sep">:</span>
          <div className="time-unit">
            <motion.span
              className="time-value"
              key={`m-${timeLeft.minutes}`}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {pad(timeLeft.minutes)}
            </motion.span>
            <span className="time-label">min</span>
          </div>
          <span className="time-sep">:</span>
          <div className="time-unit">
            <motion.span
              className="time-value"
              key={`s-${timeLeft.seconds}`}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {pad(timeLeft.seconds)}
            </motion.span>
            <span className="time-label">seg</span>
          </div>
        </motion.div>

        <motion.p
          className="countdown-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.5, 0.8] }}
          transition={{ delay: 1.5, duration: 3, repeat: Infinity }}
        >
          ✨ Ten paciencia, algo mágico te espera... ✨
        </motion.p>
      </div>
    </div>
  );
}
