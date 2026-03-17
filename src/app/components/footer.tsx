import { motion } from "motion/react";
import { PixelIcon } from "./pixel-icon";
import { Twitter, Github, MessageCircle } from "lucide-react";

export function Footer() {
  const footerLinks = {
    PRODUCT: ["Features", "Roadmap", "Pricing", "Changelog"],
    COMPANY: ["About", "Blog", "Careers", "Contact"],
    SUPPORT: ["Help Center", "Community", "Status", "API Docs"],
  };

  const socialIcons = {
    Twitter: Twitter,
    Discord: MessageCircle,
    GitHub: Github,
  };

  return (
    <footer className="bg-[#111] text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'var(--pink)' }}>
                <PixelIcon type="sparkle" className="w-8 h-8 text-black" />
              </div>
              <span style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '24px' }}>
                DECLUTTR
              </span>
            </div>
            <p className="text-sm opacity-70 mb-6 max-w-xs">
              Making the digital world a cleaner, faster, and more sustainable place—one pixel at a time.
            </p>
            <div className="flex gap-4">
              {(["Twitter", "Discord", "GitHub"] as const).map((social) => {
                const Icon = socialIcons[social];
                return (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -2 }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm opacity-50" style={{ fontFamily: "'Pixelify Sans', monospace" }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                      whileHover={{ x: 2 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-50">
            © 2026 Decluttr. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm opacity-50">
            <motion.a href="#" whileHover={{ opacity: 1 }}>Privacy</motion.a>
            <motion.a href="#" whileHover={{ opacity: 1 }}>Terms</motion.a>
            <motion.a href="#" whileHover={{ opacity: 1 }}>Security</motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}