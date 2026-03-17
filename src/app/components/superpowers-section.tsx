import { motion } from "motion/react";
import { PixelIcon } from "./pixel-icon";
import { ArrowRight } from "lucide-react";
import { GhostDecoration } from "./ghost-decoration";

const superpowers = [
  {
    icon: "email",
    title: "INBOX CLEANER",
    description: "Archive, delete, and unsubscribe like lightning. Never see spam again.",
    color: "var(--yellow)",
    xp: "150 XP",
  },
  {
    icon: "folder",
    title: "FILE SPRITE",
    description: "AI-powered file organization that actually makes sense for your workflow.",
    color: "var(--blue)",
    xp: "200 XP",
  },
  {
    icon: "browser",
    title: "THE GOBLIN",
    description: "Auto-hibernate old tabs to save RAM & focus. No more chaos.",
    color: "var(--pink)",
    xp: "175 XP",
  },
];

export function SuperpowersSection() {
  return (
    <section id="powers" className="py-24 px-4 md:px-8 relative bg-[var(--background)]">
      {/* Ghost decoration - single yellow ghost */}
      <motion.div
        className="z-50"
        animate={{ y: [0, -11, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <GhostDecoration className="absolute bottom-28 right-16 md:right-32" size={58} color="yellow" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <PixelIcon type="sparkle" className="w-8 h-8 text-[var(--yellow)]" animate />
            <h2 style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '600' }}>
              SUPERPOWERS
            </h2>
            <PixelIcon type="sparkle" className="w-8 h-8 text-[var(--yellow)]" animate />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {superpowers.map((power, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="bg-[#111] text-white rounded-2xl p-8 shadow-2xl border-2 border-black h-full flex flex-col relative overflow-hidden group">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${power.color}, transparent)` }}
                />

                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 rounded-lg text-xs border-2" style={{ fontFamily: "'Pixelify Sans', monospace", background: power.color, color: '#111', borderColor: power.color }}>
                    {power.xp}
                  </div>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6 p-4 rounded-xl inline-block self-start" style={{ background: `${power.color}20`, border: `2px solid ${power.color}` }}>
                    <PixelIcon type={power.icon as any} className="w-12 h-12" style={{ color: power.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="mb-4" style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '18px' }}>
                    {power.title}
                  </h3>

                  <p className="mb-6 flex-1 text-sm opacity-80">
                    {power.description}
                  </p>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-sm group/btn self-start"
                    style={{ color: power.color, fontFamily: "'Pixelify Sans', monospace" }}
                  >
                    <span>UNLOCK</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Progress bar decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${power.color}, transparent)` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}