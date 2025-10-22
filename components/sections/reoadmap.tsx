"use client";

import useEmblaCarousel from "embla-carousel-react";
import ReoadmapCard from "../ui/reoadmap-card";

const Reoadmap = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  });

  return (
    <section className="pb-[117px]">
      <h1 className="font-camieis uppercase text-[100px] text-center mb-[142px]">
        Roadmap
      </h1>
      <div className="w-screen flex items-start gap-[62px]">
        <div ref={emblaRef} className="embla w-full">
          <div className="embla__container gap-[70px]">
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
                active
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
                active
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
