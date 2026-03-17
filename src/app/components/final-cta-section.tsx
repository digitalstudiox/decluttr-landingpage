import { motion } from "motion/react";
import { PixelIcon } from "./pixel-icon";
import { Sparkles } from "lucide-react";
import { GhostDecoration } from "./ghost-decoration";

export function FinalCTASection() {
  return (
    <section className="py-32 px-4 md:px-8 relative overflow-hidden bg-[var(--background)]">
      {/* Ghost decorations - 2 ghosts, well-spaced */}
      <motion.div
        className="z-50"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <GhostDecoration className="absolute top-24 right-12 md:right-24" size={56} color="blue" />
      </motion.div>
      <motion.div
        className="z-50"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <GhostDecoration className="absolute bottom-12 left-12 md:left-20" size={60} color="pink" />
      </motion.div>
      

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <PixelIcon type="sparkle" className="w-8 h-8 text-[var(--pink)]" animate />
            <PixelIcon type="star" className="w-8 h-8 text-[var(--yellow)]" animate />
            <PixelIcon type="sparkle" className="w-8 h-8 text-[var(--blue)]" animate />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
          style={{ 
            fontFamily: "'Pixelify Sans', monospace", 
            fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
            fontWeight: '600',
            lineHeight: '1.1'
          }}
        >
          CLEAN STARTS<br />HERE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl mb-12"
          style={{ color: 'var(--muted)' }}
        >
          Join 52,000+ others who have turned their digital chaos into habits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-6 rounded-2xl flex items-center gap-3 mx-auto shadow-2xl hover:shadow-3xl transition-shadow relative overflow-hidden group"
            style={{ 
              background: '#111',
              color: '#fff',
              fontFamily: "'Pixelify Sans', monospace",
              fontSize: '18px'
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[var(--pink)] via-[var(--yellow)] to-[var(--blue)] opacity-0 group-hover:opacity-20 transition-opacity"
            />
            <span>Start Decluttering</span>
            <span>
              →
            </span>
          </motion.button>

          <p className="mt-6 text-sm" style={{ color: 'var(--muted)' }}>Free forever. No credit card required.          </p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 items-center"
        >
          {[
            { label: "52K+ Users", icon: "email" },
            { label: "1.2M Tasks", icon: "folder" },
            { label: "99% Happy", icon: "star" },
          ].map((stat, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `var(--${["pink", "blue", "yellow"][index]})` }}>
                <PixelIcon type={stat.icon as any} className="w-6 h-6 text-black" />
              </div>
              <span style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '14px' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}