"use client";

import useEmblaCarousel from "embla-carousel-react";
import ReoadmapCard from "../ui/reoadmap-card";
import { useEffect, useState } from "react";

const Reoadmap = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="pb-[117px] md:pt-0 pt-[60px]">
      <h1 className="font-camieis uppercase text-[32px] md:text-5xl lg:text-6xl xl:text-[100px] text-center mb-[37px] md:mb-[142px]">
        Roadmap
      </h1>

      <div className="w-screen flex items-start gap-[62px]">
        <div ref={emblaRef} className="ml-[10px] embla w-full">
          <div className="embla__container gap-[70px]">
            <div className="embla__slide md:hidden">
              <ReoadmapCard
                title="2026 Q4"
                active={isMobile}
                items={[
                  "Beta Readiness",
                  "NFT Usage",
                  "Playable Version on Blockchain",
                  "In-game NFT Marketplace",
                ]}
              />
            </div>
            <div className="embla__slide">
              <ReoadmapCard
                title="2026 Q1-Q2"
                items={[
                  "Alpha Launch Prep",
                  "Roadmap v3/3s",
                  "Community Building",
                  "Tokenomics",
                ]}
              />
            </div>
            <div className="embla__slide">
              <ReoadmapCard
                title="2026 Q2"
                items={[
                  "Airdrop Campaign",
                  "Smart Contracts Audit",
                  "Public Sale",
                  "CEX Listing",
                  "Closed Alpha Test",
                  "Alpha Feedback",
                ]}
              />
            </div>
            <div className="embla__slide">
              <ReoadmapCard
                title="2026 Q3"
                items={[
                  "Public Alpha Release",
                  "Community Engagement",
                  "Go-to-Market Strategy",
                  "NFT Sale",
                  "Beta Prep",
                ]}
              />
            </div>
            <div className="embla__slide">
              <ReoadmapCard
                title="2026 Q4"
                active={isMobile}
                items={[
                  "Beta Readiness",
                  "NFT Usage",
                  "Playable Version on Blockchain",
                  "In-game NFT Marketplace",
                ]}
              />
            </div>
            <div className="embla__slide">
              <ReoadmapCard
                title="2026"
                items={["Beta Launch", "Post-Launch Plans"]}
              />
            </div>
            <div className="embla__slide">
              <ReoadmapCard
                title="2026 Q1-Q2"
                items={[
                  "Alpha Launch Prep",
                  "Roadmap v3/3s",
                  "Community Building",
                  "Tokenomics",
                ]}
              />
            </div>
            <div className="embla__slide">
              <ReoadmapCard
                title="2026 Q2"
                items={[
                  "Airdrop Campaign",
                  "Smart Contracts Audit",
                  "Public Sale",
                  "CEX Listing",
                  "Closed Alpha Test",
                  "Alpha Feedback",
                ]}
              />
            </div>
            <div className="embla__slide">
              <ReoadmapCard
                title="2026 Q3"
                items={[
                  "Public Alpha Release",
                  "Community Engagement",
                  "Go-to-Market Strategy",
                  "NFT Sale",
                  "Beta Prep",
                ]}
              />
            </div>
            <div className="embla__slide">
              <ReoadmapCard
                title="2026 Q4"
                active={isMobile}
                items={[
                  "Beta Readiness",
                  "NFT Usage",
                  "Playable Version on Blockchain",
                  "In-game NFT Marketplace",
                ]}
              />
            </div>
            <div className="embla__slide">
              <ReoadmapCard
                title="2026"
                items={["Beta Launch", "Post-Launch Plans"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reoadmap;
