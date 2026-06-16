import './NextButton.css';

interface NextButtonProps {
  onClick: () => void;
  text?: string;
  variant?: 'default' | 'coral' | 'gold';
  delay?: number;
}

export default function NextButton({ onClick, text = 'Continuar →', variant = 'default', delay = 0.5 }: NextButtonProps) {
  return (
    <button
      className={`next-btn next-btn--${variant}`}
      onClick={onClick}
      style={{ animationDelay: `${delay}s` }}
    >
      {text}
    </button>
  );
}
