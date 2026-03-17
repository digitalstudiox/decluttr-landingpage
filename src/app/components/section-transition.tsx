import { motion } from "motion/react";
import { GhostDecoration } from "./ghost-decoration";

export function SectionTransition() {
  return (
    <div className="h-32 relative overflow-hidden bg-gradient-to-b from-white to-[var(--background)]">
      {/* Ghost decoration - single yellow ghost */}
      <motion.div
        className="z-50"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      >
        <GhostDecoration className="absolute top-1/2 -translate-y-1/2 right-32" size={70} color="yellow" />
      </motion.div>
    </div>
  );
}