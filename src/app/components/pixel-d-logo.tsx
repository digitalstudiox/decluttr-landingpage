import { motion } from "motion/react";

interface PixelDLogoProps {
  className?: string;
  progress?: number; // 0-100
  animated?: boolean;
}

export function PixelDLogo({ className = "", progress = 100, animated = true }: PixelDLogoProps) {
  return (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      initial={animated ? { scale: 0 } : {}}
      animate={animated ? { scale: 1 } : {}}
      transition={
        animated
          ? {
              duration: 0.3,
            }
          : {}
      }
      style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '14px',
        color: '#000',
        lineHeight: 1,
      }}
    >
      DC
    </motion.div>
  );
}