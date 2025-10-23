import Image from "next/image";

const Characters = () => {
  return (
    <section id="characters" className="characters">
      <h1 className="font-camieis text-center mb-[42px] lg:mb-[100px] uppercase text-[32px] md:text-[60px] lg:text-[100px]">
        Characters
      </h1>
      <Image
        src={"/characters-top-element.svg"}
        alt="characters-top-element"
        className="w-full mb-[-1px]"
        width={200}
        height={57}
      />
      <div className="relative bg-[#dd0403]">
        <div className="relative">
          <Image
            src={"/characters-solder.png"}
            alt="characters-solder"
            className="xl2:w-[850px] xl2:h-[700px] w-[500px] h-[800px] mx-auto pb-6 xl:block hidden lg:pb-0 lg:px-0 px-4"
            width={850}
            height={700}
          />
          <Image
            src={"/characters-solder-mobile.png"}
            alt="characters-solder"
            className="mx-auto pb-6 xl:hidden block lg:pb-0 lg:px-0 px-4"
            width={850}
            height={700}
          />
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-[5px] lg:hidden">
            <button className="bg-black py-[18px] px-5">
              <Image
                src={"/arrow-left.svg"}
                alt="arrow-left"
                width={31}
                height={27}
              />
            </button>
            <button className="bg-black py-[18px] px-5">
              <Image
                src={"/arrow-right.svg"}
                alt="arrow-right"
                width={31}
                height={27}
              />
            </button>
          </div>
        </div>
        <div className="xl:absolute lg:left-[1%] xl:top-1/2 lg:transform mx-[10px] sm:mx-auto lg:mx-0 mt-[30px] lg:mt-0 lg:-translate-y-1/2 ">
          <div className="relative max-w-[562px] py-[110px] md:py-[160px] px-[40px] lg:py-[85px] lg:px-[70px]">
            <Image
              className="w-full h-full absolute left-0 top-0 z-[1]"
              src={"/character-bg-card.png"}
              alt="character-bg-card"
              width={562}
              height={562}
            />
            <div className="relative z-10">
              <h2 className="font-camieis uppercase text-[18px] lg:text-2xl mb-[13px] lg:mb-[52px]">
                Upgrades
              </h2>
              <div className="max-w-[440px] leading-[140%] space-y-[22px] text-[13px]  lg:text-base ">
                <p>
                  During each stage, the player defeats enemies, from which
                  crystals drop. These crystals convert into experience points
                  and levels. For each level gained, the player earns one skill
                  point. Upon completing the stage, the player is presented with
                  a choice of three abilities for each skill point.
                </p>
                <p>
                  The chosen effects stack, allowing the player to combine them
                  and select the most effective build for their playstyle. Some
                  abilities can be combined to obtain enhanced versions of
                  skills - evolution. In the event of the player's death, they
                  lose all enhancements acquired during the last game
                  cycle.Characters have different weapons and unique
                  characteristics.
                </p>
                <p>
                  Playing as each character requires time to master, as the
                  mechanics of each character are unique. We create diverse
                  characters to cater to different players.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute top-1/2 xl:top-1/4 right-[8%] mx-auto mt-24 lg:mt-0 lg:mx-0 w-fit lg:w-auto px-4">
          <h4 className="font-camieis mb-[30px] text-2xl">Power-ups</h4>
          <div className="flex flex-row lg:flex-col gap-[36px] lg:gap-0">
            <div className="max-w-[186px] mb-11">
              <Image src={"/shilt.svg"} alt="shilt" width={110} height={110} />
              <p className="mb-3 text-[18px] mt-3 font-bold">Double damage</p>
              <p className="text-[13px] lg:text-base">
                Doubles the outgoing damage of all types of attacks
              </p>
            </div>
            <div className="max-w-[186px]">
              <Image
                src={"/energy.svg"}
                alt="energy"
                width={110}
                height={110}
              />
              <p className="mb-3 text-[18px] mt-3 font-bold">Invincibility</p>
              <p className="text-[13px] lg:text-base">
                The character ignores any incoming damage
              </p>
            </div>
          </div>
          <div className="lg:flex mt-[70px] items-center gap-[5px] hidden">
            <button className="bg-black py-[18px] px-5">
              <Image
                src={"/arrow-left.svg"}
                alt="arrow-left"
                width={31}
                height={27}
              />
            </button>
            <button className="bg-black py-[18px] px-5">
              <Image
                src={"/arrow-right.svg"}
                alt="arrow-right"
                width={31}
                height={27}
              />
            </button>
          </div>
        </div>
      </div>
      <Image
        src={"/characters-bottom-element.svg"}
        alt="characters-bottom-element"
        className="mx-auto w-[90vw] mt-[45px] lg:block hidden"
        width={1600}
        height={68}
      />
    </section>
  );
};

export default Characters;
