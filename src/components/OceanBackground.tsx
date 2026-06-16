import './OceanBackground.css';

export default function OceanBackground() {
  return (
    <div className="ocean-bg">
      <div className="ocean-gradient" />
      <div className="wave wave-1" />
      <div className="wave wave-2" />
      <div className="wave wave-3" />
      <div className="bubbles">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="bubble" style={{
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
          }} />
        ))}
      </div>
    </div>
  );
}
