import Characters from "@/components/sections/characters";
import Features from "@/components/sections/features";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import Mission from "@/components/sections/mission";
import OverviewSection from "@/components/sections/overviewSection";

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
    </main>
  );
}
