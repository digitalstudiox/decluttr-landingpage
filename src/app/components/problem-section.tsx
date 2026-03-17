import { motion } from "motion/react";
import { PixelIcon } from "./pixel-icon";
import { GhostDecoration } from "./ghost-decoration";

const problems = [
  {
    icon: "browser",
    title: "Too many tabs",
    description: "Dozens of tabs draining your focus and battery.",
    color: "var(--blue)",
  },
  {
    icon: "email",
    title: "Inbox overload",
    description: "Thousands of unread emails you'll never read.",
    color: "var(--yellow)",
  },
  {
    icon: "folder",
    title: "Unused apps",
    description: "Subscription services you forgot existed.",
    color: "var(--pink)",
  },
  {
    icon: "tree",
    title: "Not(if) Fatigue",
    description: "Notification overload destroying your peace.",
    color: "var(--green)",
  },
];

export function ProblemSection() {
  return (
    <section id="clutter" className="py-24 px-4 md:px-8 relative overflow-hidden bg-[var(--background)]">
      {/* Ghost decoration - single blue ghost */}
      <motion.div
        className="z-50"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      >
        <GhostDecoration className="absolute top-32 left-12 md:left-28" size={62} color="blue" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <PixelIcon type="sparkle" className="w-8 h-8 text-[var(--blue)]" animate />
            <h2 className="text-center" style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '600' }}>
              DIGITAL CLUTTER
            </h2>
            <PixelIcon type="sparkle" className="w-8 h-8 text-[var(--blue)]" animate />
          </div>
          
          <p className="text-center text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            We've all been there. Digital chaos draining your energy, productivity, and sanity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div
                className="h-full p-6 rounded-2xl border-2 border-black shadow-lg relative overflow-hidden group"
                style={{ background: problem.color }}
              >
                <motion.div
                  className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <PixelIcon type={problem.icon as any} className="w-12 h-12 text-black" />
                  </div>
                  
                  <h3 className="mb-3" style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '16px', color: '#111' }}>
                    {problem.title}
                  </h3>
                  
                  <p className="text-sm" style={{ color: '#111', opacity: 0.8 }}>
                    {problem.description}
                  </p>
                </div>

                {/* Decorative pixel corner */}
                <div className="absolute bottom-2 right-2 opacity-20">
                  <div className="w-4 h-4 bg-black" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}