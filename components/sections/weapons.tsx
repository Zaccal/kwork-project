"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";

const Weapons = () => {
  const [emblaRef] = useEmblaCarousel();
  const [value, setValue] = useState(1);

  const cards = [
    { id: 1, normal: "/card-1.png", hover: "/card-1-hover.png" },
    { id: 2, normal: "/card-2.png", hover: "/card-2-hover.png" },
    { id: 3, normal: "/card-3.png", hover: "/card-3-hover.png" },
    { id: 4, normal: "/card-4.png", hover: "/card-4-hover.png" },
  ];

  return (
    <section
      id="nfts"
      className="weapon pb-[200px] lg:pb-[100vh] pt-[237px] sm:px-4 px-0"
    >
      <h1 className="text-[32px] md:text-5xl font-camieis uppercase lg:text-[100px] text-center mb-[24px] lg:mb-[70px]">
        NFT weapons
      </h1>

      <p className="max-w-[466px] text-[18px] mx-auto mb-[75px] px-2">
        Earn more effectively with NFT weapons boasting increased firepower,
        allowing you to quickly eliminate hordes of mutants. More points, more
        rewards.
      </p>
      <div ref={emblaRef} className="embla lg:hidden">
        <div className="embla__container gap-[46px]">
          {cards.map((card) => (
            <div key={card.id} className="embla__slide_one-half">
              {card.id === value ? (
                <Image
                  onClick={() => setValue(card.id)}
                  src={card.hover}
                  alt={`card-${card.id}`}
                  width={400}
                  height={642}
                  loading="eager"
                  className="min-w-[222px] min-h-[333px]"
                />
              ) : (
                <Image
                  src={card.normal}
                  onClick={() => setValue(card.id)}
                  alt={`card-${card.id}`}
                  width={400}
                  height={642}
                  loading="eager"
                  className="min-w-[222px] min-h-[333px]"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex gap-[60px] container weapons__cards">
        {cards.map((card) => (
          <div key={card.id} className="relative group">
            <Image
              src={card.normal}
              alt={`card-${card.id}`}
              width={300}
              height={442}
              className="transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src={card.hover}
              alt={`card-${card.id}-hover`}
              width={300}
              height={442}
              className="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[60px]">
        <button className="btn_watch-trailer font-camieis text-base md:text-2xl mx-auto text-white px-[61px] text-nowrap py-[43px]">
          NFT Marketplace
        </button>
      </div>
    </section>
  );
};

export default Weapons;
