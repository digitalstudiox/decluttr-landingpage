import { motion, useScroll, useTransform } from "motion/react";
import { PixelIcon } from "./pixel-icon";

export function Navigation() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(246, 246, 244, 0)", "rgba(246, 246, 244, 0.95)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.1)"]
  );

  return (
    <motion.nav
      style={{ 
        backgroundColor,
        borderBottomColor: borderColor,
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b"
    >
      <div className="w-full px-0 md:px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-3 ml-0"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-lg p-2" style={{ background: 'var(--pink)' }}>
            <PixelIcon type="sparkle" className="w-full h-full text-black" />
          </div>
          <span style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '20px' }}>
            DECLUTTR
          </span>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Quests", href: "#quests" },
            { label: "Clutter", href: "#clutter" },
            { label: "Powers", href: "#powers" },
            { label: "Achievements", href: "#achievements" },
            { label: "Impact", href: "#impact" }
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm hover:opacity-100 transition-opacity"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: '500',
                opacity: 0.7
              }}
              whileHover={{ y: -2 }}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(item.href);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-2 rounded-lg"
          style={{ 
            background: '#111',
            color: '#fff',
            fontFamily: "'Inter', sans-serif",
            fontWeight: '600',
            fontSize: '14px'
          }}
        >Get Started</motion.button>
      </div>
    </motion.nav>
  );
}