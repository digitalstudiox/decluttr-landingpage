interface GhostDecorationProps {
  className?: string;
  size?: number;
  color?: "pink" | "blue" | "yellow" | "green";
}

export function GhostDecoration({ className = "", size = 80, color = "pink" }: GhostDecorationProps) {
  const colors = {
    pink: "#FF79C6",
    blue: "#6FFFE9",
    yellow: "#FFD93D",
    green: "#5AF78E",
  };

  const selectedColor = colors[color];

  return (
    <div className={`pointer-events-none ${className}`}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none"><rect></rect><rect></rect>{/* Ghost body */}<rect></rect><rect></rect><rect x="60" y="40" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="80" y="40" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="100" y="40" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="120" y="40" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="40" y="60" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="60" y="60" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="80" y="60" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="100" y="60" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="120" y="60" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="140" y="60" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="40" y="80" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="60" y="80" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="80" y="80" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="100" y="80" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="120" y="80" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="140" y="80" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="40" y="100" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="60" y="100" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="80" y="100" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="100" y="100" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="120" y="100" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="140" y="100" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="40" y="120" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="60" y="120" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="80" y="120" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="100" y="120" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="120" y="120" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="140" y="120" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="40" y="140" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="60" y="140" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="80" y="140" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="100" y="140" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="120" y="140" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="140" y="140" width="20" height="20" fill={selectedColor} /><rect></rect>{/* Wavy bottom */}<rect></rect><rect></rect><rect x="40" y="160" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="80" y="160" width="20" height="20" fill={selectedColor} /><rect></rect><rect x="120" y="160" width="20" height="20" fill={selectedColor} /><rect></rect>{/* Eyes */}<rect x="60" y="80" width="20" height="20" fill="#000" /><rect x="60" y="100" width="20" height="20" fill="#000" /><rect x="120" y="80" width="20" height="20" fill="#000" /><rect x="120" y="100" width="20" height="20" fill="#000" />{/* Eye highlights (white) */}<rect x="70" y="85" width="8" height="8" fill="#FFF" /><rect x="130" y="85" width="8" height="8" fill="#FFF" /></svg>
    </div>
  );
}
