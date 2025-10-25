import Characters from "@/components/sections/characters";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import GameModels from "@/components/sections/game-models";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import Mission from "@/components/sections/mission";
import News from "@/components/sections/news";
import OverviewSection from "@/components/sections/overviewSection";
import Reoadmap from "@/components/sections/reoadmap";
import Tokenomics from "@/components/sections/tokenomics";
import NFTs from "@/components/sections/nfts";

export default function Home() {
  return (
    <main>
      <HeroSection>
        <Header />
      </HeroSection>
      <div className="overflow-x-hidden max-w-screen">
        <OverviewSection />
        <Mission />
        <Features />
      </div>

      <Characters />
      <NFTs />

      <div className="overflow-x-hidden max-w-screen">
        <GameModels />
        <Tokenomics />
      </div>
      <Reoadmap />
      <News />
      <Footer />
    </main>
  );
}
