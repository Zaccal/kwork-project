"use client";

import Image from "next/image";
import FeatureAccordion from "../ui/feature-accordion";
import { cn } from "@/lib/utils";
import { useState } from "react";

const CLASSNAME_FEATURES_CONTENT =
  "relative z-10 justify-center items-center flex lg:block mt-5 lg:mx-10 lg:mt-[182px] 2xl:mt-[52px] bg-center bg-cover bg-no-repeat aspect-[9/5]";

function getBackground(active: string | null) {
  switch (active) {
    case "weapons":
      return "lg:bg-[url('/feature-bg.png')]";
    case "location":
      return "lg:bg-[url('/feature-bg-location.png')]";
    case "heroes":
      return "lg:bg-[url('/feature-bg-heros.png')]";
    default:
      return "lg:bg-[url('/feature-bg.png')]";
  }
}

const Features = () => {
  const [active, setActive] = useState<string | null>("weapons");

  return (
    <section className="features pt-[351px] lg:pt-[130px] relative">
      <Image
        src="/soldiers-features.png"
        alt="soldiers-features"
        className="absolute -top-[19%] right-0 lg:block hidden"
        width={600}
        height={600}
      />
      <div className="container">
        <h1 className="font-camieis text-[32px] sm:text-[60px] lg:text-[100px] text-center uppercase z-10 relative">
          <Image
            className="absolute lg:hidden bottom-[22%] z-0 left-1/2 -translate-x-1/2"
            src="/soldiers-features.png"
            alt="features"
            width={351}
            height={351}
          />
          <span className="z-10 relative">features</span>
        </h1>
      </div>
      <div className={cn(CLASSNAME_FEATURES_CONTENT, getBackground(active))}>
        <div className="features__texts lg:hidden block w-fit px-6 py-6 lg:pr-[231px] lg:pl-[28px] lg:pb-[133px] lg:pt-[40px]">
          <Image
            src={"/feature-element.svg"}
            alt="feature-element"
            className="ml-8.5 2xl:block hidden"
            width={108}
            height={95}
          />

          <FeatureAccordion />
        </div>
        <div className="features__wrapper z-10 px-2 lg:flex items-end justify-between lg:pb-[83px] lg:pr-[72px] lg:pl-[92px] lg:mt-5 lg:mb-[42px] h-full lg:ml-[98px] lg:mr-[46px]">
          <div className="features__texts lg:block hidden w-fit px-6 py-6 lg:pr-[231px] lg:pl-[28px] lg:pb-[133px] lg:pt-[40px]">
            <Image
              src={"/feature-element.svg"}
              alt="feature-element"
              className="ml-8.5 2xl:block hidden"
              width={108}
              height={95}
            />

            <FeatureAccordion setter={setActive} />
          </div>
          <Image
            src={"/feature-element-2.svg"}
            alt="feature-element-2"
            width={366}
            height={182}
            className="hidden 2xl:block"
          />
        </div>
      </div>
      <Image
        src={"/feature-bg-left-element.jpg"}
        alt="feature-bg-left-element"
        width={507}
        height={167}
        className="absolute top-[18%] right-0 z-[1] hidden xl:block"
      />
      <Image
        src={"/feature-bg-right-element.jpg"}
        alt="feature-bg-right-element"
        width={507}
        height={167}
        className="absolute top-[18%] left-0 z-[1] hidden xl:block"
      />
    </section>
  );
};

export default Features;
