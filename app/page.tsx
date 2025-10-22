import Characters from "@/components/sections/characters";
import Features from "@/components/sections/features";
import GameModels from "@/components/sections/game-models";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import Mission from "@/components/sections/mission";
import OverviewSection from "@/components/sections/overviewSection";
import Weapons from "@/components/sections/weapons";

export default function Home() {
  return (
    <main>
      <HeroSection>
        <Header />
      </HeroSection>
      <OverviewSection />
      <Mission />
      <Features />
      <Characters />
      <Weapons />
      <GameModels />
    </main>
  );
}
