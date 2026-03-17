import { motion } from "motion/react";
import { PixelIcon } from "./pixel-icon";
import { Sparkles } from "lucide-react";
import { GhostDecoration } from "./ghost-decoration";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 py-24 bg-[var(--background)]">
      {/* Ghost decorations - 2 ghosts, balanced colors with high z-index */}
      <motion.div
        className="z-50"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <GhostDecoration className="absolute top-24 left-16 md:left-24" size={58} color="pink" />
      </motion.div>
      <motion.div
        className="z-50"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <GhostDecoration className="absolute top-40 right-16 md:right-32" size={65} color="blue" />
      </motion.div>
      
      {/* Floating pixel decorations */}
      <motion.div
        className="absolute top-20 left-10 text-[var(--pink)]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <PixelIcon type="sparkle" className="w-8 h-8" />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-[var(--blue)]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <PixelIcon type="star" className="w-10 h-10" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-20 text-[var(--yellow)]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <PixelIcon type="pacman" className="w-12 h-12" />
      </motion.div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-[var(--pink)]/10 border-2 border-[var(--pink)] inline-flex items-center gap-2" style={{ fontFamily: "'Pixelify Sans', monospace" }}>
              
              <span className="tracking-wider" style={{ fontSize: '12px' }}>LEVEL UP YOUR LIFE !</span>
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
          style={{ 
            fontFamily: "'Pixelify Sans', monospace",
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            lineHeight: '1.1',
            letterSpacing: '0.02em'
          }}
        >
          DECLUTTR
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            lineHeight: '1.2',
            fontWeight: '600'
          }}
        >
          Declutter your digital world.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          style={{ color: 'var(--muted)', fontFamily: "'Inter', sans-serif" }}
        >
          Turn your digital chaos into gamified productivity fun! Clean your inbox, organize files, manage tabs—earn real rewards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow"
            style={{ 
              background: '#111',
              color: '#fff',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '600'
            }}
          >
            <span>Start Decluttering</span>
            <span>
              →
            </span>
          </motion.button>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  style={{ background: `var(--${i === 1 ? 'pink' : i === 2 ? 'yellow' : i === 3 ? 'blue' : 'green'})` }}
                />
              ))}
            </div>
            <span className="text-sm" style={{ color: 'var(--muted)' }}>
              52,000+ users
            </span>
          </div>
        </motion.div>

        {/* Hero visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-md mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-4 border-black relative">
            <div className="absolute -top-3 -right-3">
              <div className="bg-[var(--yellow)] p-2 rounded-lg border-2 border-black">
                <PixelIcon type="star" className="w-6 h-6" />
              </div>
            </div>
            <div className="absolute -top-3 -left-3">
              <div className="bg-[var(--pink)] p-2 rounded-lg border-2 border-black" style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '10px' }}>
                NEW!
              </div>
            </div>
            
            <div className="bg-[var(--yellow)]/20 rounded-xl p-6 border-2 border-[var(--yellow)]">
              <div className="mb-4">
                <PixelIcon type="email" className="w-16 h-16 mx-auto text-[var(--yellow)]" />
              </div>
              <h3 className="mb-2" style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '16px' }}>INBOX HERO!</h3>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>You cleaned 50 emails today</p>
              <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '80%' }}
                  transition={{ duration: 1, delay: 1 }}
                  className="h-full rounded-full"
                  style={{ background: 'var(--yellow)' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}