import { motion } from "motion/react";
import { PixelIcon } from "./pixel-icon";
import { GhostDecoration } from "./ghost-decoration";

const ecoStats = [
  { value: "48.5kg", label: "CO₂ Saved", color: "var(--green)" },
  { value: "1.8TB", label: "Storage Freed", color: "var(--blue)" },
  { value: "14", label: "Trees Planted", color: "var(--green)" },
];

export function EcoImpactSection() {
  return (
    <section id="impact" className="py-24 px-4 md:px-8 relative bg-[var(--background)]">
      {/* Ghost decoration - single green ghost */}
      <motion.div
        className="z-50"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <GhostDecoration className="absolute bottom-32 right-16 md:right-28" size={60} color="green" />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <PixelIcon type="sparkle" className="w-8 h-8 text-[var(--green)]" animate />
              <h2 style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '600' }}>
                ECO IMPACT
              </h2>
              <PixelIcon type="sparkle" className="w-8 h-8 text-[var(--green)]" animate />
            </div>

            <p className="text-lg mb-8" style={{ color: 'var(--muted)' }}>
              Every megabyte deleted is energy saved. We calculate the carbon footprint of your digital storage.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {ecoStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-center bg-white/5 rounded-xl p-4 border border-white/10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1, type: "spring" }}
                      className="mb-2"
                      style={{ 
                        fontFamily: "'Pixelify Sans', monospace", 
                        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                        fontWeight: '700',
                        color: stat.color,
                        lineHeight: '1.2'
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-4 border-black relative overflow-hidden">
              {/* Corner badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-[var(--green)] px-4 py-2 rounded-bl-xl border-l-4 border-b-4 border-black">
                  <span style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '12px', color: '#111' }}>
                    ✓ VERIFIED
                  </span>
                </div>
              </div>

              {/* Main visual */}
              <div className="bg-gradient-to-br from-[var(--green)]/20 to-[var(--green)]/5 rounded-xl p-12 border-2 border-[var(--green)] relative">
                <div className="mx-auto w-32 h-32 relative">
                  <PixelIcon type="tree" className="w-full h-full text-[var(--green)]" />
                </div>

                <div className="text-center mt-8">
                  <p style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '14px' }}>
                    YOUR ECO SCORE
                  </p>
                  <motion.p
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                    style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: 'clamp(3rem, 7vw, 4rem)', fontWeight: '800', color: 'var(--green)', lineHeight: '1' }}
                  >
                    92/100
                  </motion.p>
                </div>
              </div>

              {/* Bottom stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-[var(--green)]/10">
                  <p className="text-xs opacity-60 mb-1">This Month</p>
                  <p style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '22px', fontWeight: '700' }}>+12kg</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-[var(--green)]/10">
                  <p className="text-xs opacity-60 mb-1">All Time</p>
                  <p style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '22px', fontWeight: '700' }}>48.5kg</p>
                </div>
              </div>
            </div>

            {/* Decorative pixel elements */}
            <motion.div
              className="absolute -top-4 -left-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <PixelIcon type="sparkle" className="w-8 h-8 text-[var(--green)]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}