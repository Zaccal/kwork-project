import { rimma } from "@/app/layout";
import Image from "next/image";

const Features = () => {
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
            className="absolute lg:hidden bottom-1/5 z-0 left-1/2 -translate-x-1/2"
            src="/soldiers-features.png"
            alt="features"
            width={351}
            height={351}
          />
          <span className="z-10 relative">features</span>
        </h1>
      </div>

      <div className="features__content relative z-10 mx-10 mt-[52px]">
        <div className="features__wrapper z-10 flex items-end justify-between pb-[83px] pr-[72px] pl-[92px] mt-5 mb-[42px] h-full ml-[98px] mr-[46px]">
          <div className="features__texts w-fit pr-[231px] pl-[28px] pb-[133px] pt-[40px]">
            <Image
              src={"/feature-element.svg"}
              alt="feature-element"
              className="ml-8.5"
              width={108}
              height={95}
            />

            <div className="flex items-center uppercase gap-[17px]">
              <h2 className="text-[48px] relative w-fit font-camieis mt-[30px]">
                - Weapons
              </h2>
              <span className={` text-[24px]  ${rimma.className}`}>+10</span>
            </div>
            <p className="leading-[140%] max-w-[342px] pl-8.5">
              The player's arsenal includes a variety of weapons: rifles,
              circular saws, swarms of self-guided missiles, napalm drones, and
              much more. In addition to weapons, skills such as jumping,
              dashing, and firing rate can be upgraded. At the beginning of the
              game, 4-8 skills are available. As goals are achieved, dozens of
              different skills and new characters are unlocked.
            </p>
            <div className="flex items-center uppercase gap-[17px]">
              <h2 className="text-[48px] relative w-fit font-camieis mt-[30px]">
                - location
              </h2>
              <span className={` text-[24px]  ${rimma.className}`}>+5</span>
            </div>
            <div className="flex items-center uppercase gap-[17px]">
              <h2 className="text-[48px] relative w-fit font-camieis mt-[30px]">
                - Heroes
              </h2>
              <span className={` text-[24px]  ${rimma.className}`}>+3</span>
            </div>
          </div>
          <Image
            src={"/feature-element-2.svg"}
            alt="feature-element-2"
            width={366}
            height={182}
          />
        </div>
      </div>
      <Image
        src={"/feature-bg-left-element.jpg"}
        alt="feature-bg-left-element"
        width={507}
        height={167}
        className="absolute top-[16%] right-0 z-[1]"
      />
      <Image
        src={"/feature-bg-right-element.jpg"}
        alt="feature-bg-left-element"
        width={507}
        height={167}
        className="absolute top-[16%] left-0 z-[1]"
      />
    </section>
  );
};

export default Features;
