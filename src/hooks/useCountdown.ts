import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

// July 10, 2026 at 3:00 PM Colombia time (UTC-5)
const TARGET_DATE = new Date('2026-07-10T20:00:00.000Z'); // 3:00 PM COT = 20:00 UTC

export function useCountdown(): { timeLeft: TimeLeft; isReady: boolean } {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const now = new Date().getTime();
    const diff = TARGET_DATE.getTime() - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      total: diff,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return { timeLeft, isReady: timeLeft.total <= 0 };
}
