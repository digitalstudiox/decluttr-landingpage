import { motion } from "motion/react";
import { PixelIcon } from "./pixel-icon";
import { GhostDecoration } from "./ghost-decoration";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-4 md:px-8 bg-[#111] text-white relative overflow-hidden">
      {/* Ghost decoration - single pink ghost */}
      <motion.div
        className="z-50"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <GhostDecoration className="absolute top-20 left-12 md:left-20" size={54} color="pink" />
      </motion.div>
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <PixelIcon type="star" className="w-32 h-32 text-[var(--pink)]" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <PixelIcon type="sparkle" className="w-40 h-40 text-[var(--blue)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <PixelIcon type="sparkle" className="w-8 h-8 text-[var(--pink)]" animate />
            <h2 style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '600' }}>
              ACHIEVEMENTS
            </h2>
            <PixelIcon type="sparkle" className="w-8 h-8 text-[var(--pink)]" animate />
          </div>
          <p className="text-lg opacity-70">
            Challenge your desktop shouldn't feel like work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Total Streak */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black rounded-2xl p-8 border-2 border-[var(--yellow)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--yellow)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="mb-6">
                <PixelIcon type="sparkle" className="w-12 h-12 text-[var(--yellow)]" />
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: 'clamp(3.5rem, 8vw, 5rem)', fontWeight: '800', lineHeight: '1' }}
              >
                18
              </motion.div>
              
              <p className="mt-2 text-sm opacity-70">DAY STREAK</p>
              <div className="mt-4 flex gap-1">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-8 rounded-full"
                    style={{ background: i < 5 ? 'var(--yellow)' : 'rgba(255, 255, 255, 0.2)' }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Total Points */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-[var(--pink)] to-[var(--pink)]/80 rounded-2xl p-8 border-2 border-[var(--pink)] shadow-2xl"
          >
            <div className="text-center">
              <div className="mb-4 inline-block p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                <PixelIcon type="star" className="w-12 h-12 text-white" />
              </div>
              
              <p className="text-sm mb-2 opacity-90" style={{ fontFamily: "'Pixelify Sans', monospace" }}>
                TOTAL XP
              </p>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: 'clamp(4rem, 9vw, 6rem)', fontWeight: '800', lineHeight: '1', color: '#111' }}
              >
                4,120
              </motion.div>
              
              <div className="mt-4 h-2 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '65%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-white rounded-full"
                />
              </div>
              <p className="mt-2 text-xs opacity-80">LEVEL 12 → 13</p>
            </div>
          </motion.div>

          {/* Badges Earned */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black rounded-2xl p-8 border-2 border-[var(--blue)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue)]/10 to-transparent" />
            
            <div className="relative z-10">
              <h3 className="mb-6 text-sm opacity-70">BADGES EARNED</h3>
              
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { icon: "email", color: "var(--yellow)" },
                  { icon: "folder", color: "var(--pink)" },
                  { icon: "browser", color: "var(--blue)" },
                  { icon: "tree", color: "var(--green)" },
                  { icon: "star", color: "var(--yellow)" },
                  { icon: "sparkle", color: "var(--pink)" },
                ].map((badge, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-lg flex items-center justify-center cursor-pointer"
                    style={{ background: badge.color }}
                  >
                    <PixelIcon type={badge.icon as any} className="w-6 h-6 text-black" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-center" style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '18px', fontWeight: '700' }}>
                6 / 24 COLLECTED
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}