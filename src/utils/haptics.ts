// Feedback háptico para móviles. Silencioso en desktop / navegadores sin soporte.
type Pattern = 'tap' | 'success' | 'reveal' | 'playful';

const PATTERNS: Record<Pattern, number | number[]> = {
  tap: 12,
  success: [18, 40, 25],
  reveal: [30, 50, 30, 50, 60],
  playful: [10, 30, 10],
};

export function haptic(pattern: Pattern = 'tap') {
  if (typeof navigator === 'undefined' || typeof navigator.vibrate !== 'function') return;
  // Respeta la preferencia de menos movimiento del sistema.
  if (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return;
  }
  try {
    navigator.vibrate(PATTERNS[pattern]);
  } catch {
    /* no-op */
  }
}
