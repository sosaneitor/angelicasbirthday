import './SoundToggle.css';

interface SoundToggleProps {
  isMuted: boolean;
  onToggle: () => void;
}

export default function SoundToggle({ isMuted, onToggle }: SoundToggleProps) {
  return (
    <button
      className="sound-toggle"
      onClick={onToggle}
      aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
    >
      {isMuted ? '🔇' : '🔊'}
    </button>
  );
}
