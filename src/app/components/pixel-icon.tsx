import { motion } from "motion/react";

interface PixelIconProps {
  type: "email" | "folder" | "browser" | "tree" | "sparkle" | "star" | "pacman";
  className?: string;
  animate?: boolean;
}

export function PixelIcon({ type, className = "", animate = false }: PixelIconProps) {
  const icons = {
    email: (
      <svg viewBox="0 0 32 32" className={className} fill="currentColor">
        <rect x="4" y="8" width="24" height="16" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M4 8 L16 16 L28 8" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="8" y="12" width="2" height="2" />
        <rect x="10" y="14" width="2" height="2" />
        <rect x="12" y="16" width="2" height="2" />
        <rect x="14" y="16" width="2" height="2" />
        <rect x="16" y="16" width="2" height="2" />
        <rect x="18" y="14" width="2" height="2" />
        <rect x="20" y="12" width="2" height="2" />
      </svg>
    ),
    folder: (
      <svg viewBox="0 0 32 32" className={className} fill="currentColor">
        <rect x="4" y="10" width="24" height="14" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M4 10 L4 8 L14 8 L16 10 L28 10" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="8" y="14" width="16" height="2" />
        <rect x="8" y="18" width="12" height="2" />
      </svg>
    ),
    browser: (
      <svg viewBox="0 0 32 32" className={className} fill="currentColor">
        <rect x="4" y="6" width="24" height="20" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="4" y1="10" x2="28" y2="10" stroke="currentColor" strokeWidth="2" />
        <rect x="7" y="7.5" width="2" height="1" />
        <rect x="10" y="7.5" width="2" height="1" />
        <rect x="13" y="7.5" width="2" height="1" />
      </svg>
    ),
    tree: (
      <svg viewBox="0 0 32 32" className={className} fill="currentColor">
        {/* Tree trunk */}
        <rect x="14" y="20" width="4" height="8" />
        {/* Bottom tree layer */}
        <rect x="10" y="16" width="12" height="4" />
        <rect x="8" y="18" width="2" height="2" />
        <rect x="22" y="18" width="2" height="2" />
        {/* Middle tree layer */}
        <rect x="12" y="12" width="8" height="4" />
        <rect x="10" y="14" width="2" height="2" />
        <rect x="20" y="14" width="2" height="2" />
        {/* Top tree layer */}
        <rect x="14" y="8" width="4" height="4" />
        <rect x="12" y="10" width="2" height="2" />
        <rect x="18" y="10" width="2" height="2" />
        {/* Tree top */}
        <rect x="14" y="6" width="4" height="2" />
      </svg>
    ),
    sparkle: (
      <svg viewBox="0 0 32 32" className={className} fill="currentColor">
        <rect x="15" y="4" width="2" height="24" />
        <rect x="4" y="15" width="24" height="2" />
        <rect x="8" y="8" width="16" height="16" transform="rotate(45 16 16)" opacity="0.5" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 32 32" className={className} fill="currentColor">
        <rect x="14" y="6" width="4" height="4" />
        <rect x="10" y="10" width="4" height="4" />
        <rect x="18" y="10" width="4" height="4" />
        <rect x="14" y="14" width="4" height="4" />
        <rect x="6" y="14" width="4" height="4" />
        <rect x="22" y="14" width="4" height="4" />
        <rect x="10" y="18" width="4" height="4" />
        <rect x="18" y="18" width="4" height="4" />
        <rect x="14" y="22" width="4" height="4" />
      </svg>
    ),
    pacman: (
      null
    ),
  };

  const Wrapper = animate ? motion.div : "div";
  const animationProps = animate
    ? {
        animate: {
          y: [0, -3, 0],
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }
    : {};

  return <Wrapper {...animationProps}>{icons[type]}</Wrapper>;
}