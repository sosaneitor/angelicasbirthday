import './ProgressBar.css';

interface ProgressBarProps {
  current: number; // paso actual (1-based) dentro del viaje
  total: number;
  onSeek?: (step: number) => void;
}

export default function ProgressBar({ current, total, onSeek }: ProgressBarProps) {
  return (
    <div className="progress-bar" role="progressbar" aria-valuenow={current} aria-valuemax={total}>
      {Array.from({ length: total }).map((_, i) => {
        const step = i + 1;
        const filled = step <= current;
        const canGo = step < current;
        return (
          <button
            key={step}
            type="button"
            className={`progress-seg${filled ? ' is-filled' : ''}${canGo ? ' is-clickable' : ''}`}
            onClick={() => canGo && onSeek?.(step)}
            aria-label={canGo ? `Volver al paso ${step}` : `Paso ${step}`}
            tabIndex={canGo ? 0 : -1}
          >
            <span className="progress-seg-fill" />
          </button>
        );
      })}
    </div>
  );
}
