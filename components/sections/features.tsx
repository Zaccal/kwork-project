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
      <div className="features__content relative z-10 justify-center items-center flex lg:block mt-5 lg:mx-10 lg:mt-[182px] 2xl:mt-[52px]">
        <div className="features__texts lg:hidden block w-fit px-6 py-6 lg:pr-[231px] lg:pl-[28px] lg:pb-[133px] lg:pt-[40px]">
          <Image
            src={"/feature-element.svg"}
            alt="feature-element"
            className="ml-8.5 2xl:block hidden"
            width={108}
            height={95}
          />

          <div className="flex items-baseline-last lg:items-center uppercase gap-[16px] lg:gap-[17px]">
            <h2 className="text-nowrap text-xl lg:text-[48px] relative w-fit font-camieis lg:mt-[30px]">
              - Weapons
            </h2>
            <span className={`text-[18px] lg:text-[24px] ${rimma.className}`}>
              +10
            </span>
          </div>
          <p className="leading-[140%] max-w-[342px] lg:pl-8.5 mt-3">
            The player's arsenal includes a variety of weapons: rifles, circular
            saws, swarms of self-guided missiles, napalm drones, and much more.
            In addition to weapons, skills such as jumping, dashing, and firing
            rate can be upgraded. At the beginning of the game, 4-8 skills are
            available. As goals are achieved, dozens of different skills and new
            characters are unlocked.
          </p>
          <Image
            width={351}
            height={351}
            src={"/feature-bg.png"}
            className="mt-5 mb-6 lg:hidden block"
            alt="feature-container"
          />
          <div className="flex items-baseline-last lg:items-center uppercase gap-[16px] lg:gap-[17px]">
            <h2 className="text-nowrap text-xl lg:text-[48px] relative w-fit font-camieis mt-[30px]">
              - location
            </h2>
            <span className={`text-[18px] lg:text-[24px] ${rimma.className}`}>
              +5
            </span>
          </div>
          <div className="flex items-baseline-last lg:items-center uppercase gap-[16px] lg:gap-[17px]">
            <h2 className="text-nowrap text-xl lg:text-[48px] relative w-fit font-camieis mt-[30px]">
              - Heroes
            </h2>
            <span className={`text-[18px] lg:text-[24px] ${rimma.className}`}>
              +3
            </span>
          </div>
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

            <div className="flex items-baseline-last lg:items-center uppercase gap-[16px] lg:gap-[17px]">
              <h2 className="text-nowrap text-xl lg:text-[48px] relative w-fit font-camieis mt-[30px]">
                - Weapons
              </h2>
              <span className={`lg:text-[24px] ${rimma.className}`}>+10</span>
            </div>
            <p className="leading-[140%] max-w-[342px] lg:pl-8.5 mt-3">
              The player's arsenal includes a variety of weapons: rifles,
              circular saws, swarms of self-guided missiles, napalm drones, and
              much more. In addition to weapons, skills such as jumping,
              dashing, and firing rate can be upgraded. At the beginning of the
              game, 4-8 skills are available. As goals are achieved, dozens of
              different skills and new characters are unlocked.
            </p>
            <Image
              width={351}
              height={351}
              src={"/feature-bg.png"}
              className="mt-5 mb-6 lg:hidden block"
              alt="feature-container"
            />
            <div className="flex items-baseline-last lg:items-center uppercase gap-[16px] lg:gap-[17px]">
              <h2 className="text-nowrap text-xl lg:text-[48px] relative w-fit font-camieis mt-[30px]">
                - location
              </h2>
              <span className={`lg:text-[24px] ${rimma.className}`}>+5</span>
            </div>
            <div className="flex items-baseline-last lg:items-center uppercase gap-[16px] lg:gap-[17px]">
              <h2 className="text-nowrap text-xl lg:text-[48px] relative w-fit font-camieis mt-[30px]">
                - Heroes
              </h2>
              <span className={`lg:text-[24px] ${rimma.className}`}>+3</span>
            </div>
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
