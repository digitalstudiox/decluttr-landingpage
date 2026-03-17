import { motion } from "motion/react";
import { PixelIcon } from "./pixel-icon";
import { Trophy } from "lucide-react";
import { GhostDecoration } from "./ghost-decoration";

const quests = [
  {
    id: 1,
    name: "INBOX EXORCISM",
    description: "Delete 25 old emails from last year.",
    progress: 76,
    color: "var(--yellow)",
    xp: "+150 XP",
  },
  {
    id: 2,
    name: "FOLDER ARCHITECT",
    description: "Organize 15 files into folders.",
    progress: 43,
    color: "var(--blue)",
    xp: "+120 XP",
  },
  {
    id: 3,
    name: "THE TAB SLAYER",
    description: "Close 5 tabs you don't need.",
    progress: 100,
    color: "var(--green)",
    xp: "+200 XP",
  },
  {
    id: 4,
    name: "DOWNLOAD CLEANER",
    description: "Clear 10 unused files from downloads.",
    progress: 60,
    color: "var(--pink)",
    xp: "+180 XP",
  },
];

const leaderboardData = [
  { rank: 1, name: "DecluttrPro", score: 4250, icon: "email", color: "var(--pink)" },
  { rank: 2, name: "CleanQueen", score: 3890, icon: "folder", color: "var(--blue)" },
  { rank: 3, name: "FileNinja", score: 3720, icon: "browser", color: "var(--green)" },
  { rank: 4, name: "InboxHero", score: 3250, icon: "email", color: "var(--yellow)", highlight: true },
];

export function DailyQuests() {
  return (
    <section id="quests" className="py-24 px-4 md:px-8 relative bg-[var(--background)]">
      {/* Ghost decorations - 2 ghosts, well-spaced */}
      <motion.div
        className="z-50"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <GhostDecoration className="absolute bottom-40 right-12 md:right-20" size={56} color="yellow" />
      </motion.div>
      <motion.div
        className="z-50"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <GhostDecoration className="absolute top-12 left-12 md:left-24" size={58} color="green" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <PixelIcon type="sparkle" className="w-8 h-8 text-[var(--pink)]" animate />
            <h2 style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '600' }}>
              DAILY QUESTS
            </h2>
            <PixelIcon type="sparkle" className="w-8 h-8 text-[var(--pink)]" animate />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch relative">
          {/* Ghost Style Pixel Character */}
          <GhostDecoration className="absolute -bottom-20 -right-10 opacity-80 hidden lg:block" size={60} direction="right" />

          {/* Quests Column */}
          <div className="space-y-6">
            {quests.map((quest, index) => (
              <motion.div
                key={quest.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-black relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-1 transition-all duration-300"
                    style={{ width: `${quest.progress}%`, background: quest.color }}
                  />
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '14px', marginBottom: '8px' }}>
                        {quest.name}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--muted)' }}>
                        {quest.description}
                      </p>
                    </div>
                    <div className="px-3 py-1 rounded-lg" style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '14px', fontWeight: '700', background: quest.color, color: '#111' }}>
                      {quest.xp}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${quest.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ background: quest.color }}
                      />
                    </div>
                    <div className="absolute right-0 -top-8" style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '15px', fontWeight: '700', color: 'var(--muted)' }}>
                      {quest.progress}%
                    </div>
                  </div>

                  {quest.progress === 100 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4"
                    >
                      
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Leaderboard Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#111] text-white rounded-xl p-8 shadow-2xl border-2 border-black h-full">
              <div className="flex items-center gap-3 mb-8">
                <Trophy className="w-8 h-8 text-[var(--yellow)]" />
                <h3 style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '20px' }}>
                  LEADERBOARD
                </h3>
              </div>

              <div className="space-y-4">
                {leaderboardData.map((player, index) => (
                  <motion.div
                    key={player.rank}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className={`p-4 rounded-lg ${player.highlight ? 'border-2' : ''}`}
                    style={{
                      background: player.highlight ? 'rgba(255, 121, 198, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                      borderColor: player.highlight ? 'var(--pink)' : 'transparent'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ background: player.color, fontFamily: "'Pixelify Sans', monospace", fontSize: '16px', fontWeight: '700', color: '#111' }}
                        >
                          #{player.rank}
                        </div>
                        <div>
                          <p style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: '14px' }}>
                            {player.name}
                          </p>
                          <p className="text-sm opacity-60">
                            {player.score.toLocaleString()} pts
                          </p>
                        </div>
                      </div>
                      <div className="w-8 h-8" style={{ color: player.color }}>
                        <PixelIcon type={player.icon as any} className="w-full h-full" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <p className="text-sm text-center opacity-60">
                  You're ranked <span style={{ color: 'var(--pink)', fontFamily: "'Pixelify Sans', monospace", fontSize: '16px', fontWeight: '700' }}>#142</span> globally
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}