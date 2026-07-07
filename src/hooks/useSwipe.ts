import { useRef } from 'react';
import type { TouchEvent } from 'react';

interface SwipeOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  enabled?: boolean;
  threshold?: number;
}

/**
 * Detecta swipes horizontales sin interferir con el scroll vertical ni con
 * carruseles horizontales (esos se desactivan con `enabled: false`).
 * Solo dispara si el desplazamiento horizontal domina claramente al vertical.
 */
export function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  enabled = true,
  threshold = 60,
}: SwipeOptions) {
  const start = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = (e: TouchEvent) => {
    const t = e.touches[0];
    start.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (!enabled || !start.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.current.x;
    const dy = t.clientY - start.current.y;
    start.current = null;

    // El gesto horizontal debe dominar al vertical (evita chocar con scroll).
    if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy) * 1.4) return;

    if (dx < 0) onSwipeLeft?.();
    else onSwipeRight?.();
  };

  return { onTouchStart, onTouchEnd };
}
