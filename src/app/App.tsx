import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { DailyQuests } from "./components/daily-quests";
import { ProblemSection } from "./components/problem-section";
import { SuperpowersSection } from "./components/superpowers-section";
import { AchievementsSection } from "./components/achievements-section";
import { EcoImpactSection } from "./components/eco-impact-section";
import { FinalCTASection } from "./components/final-cta-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navigation />
      <HeroSection />
      <DailyQuests />
      <ProblemSection />
      <SuperpowersSection />
      <AchievementsSection />
      <EcoImpactSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}