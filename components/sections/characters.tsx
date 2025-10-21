import Image from "next/image";

const Characters = () => {
  return (
    <section className="characters">
      <h1 className="font-camieis text-center mb-[100px] uppercase text-[32px] md:text-[60px] lg:text-[100px]">
        Characters
      </h1>
      <div className="characters__wrapper pb-[165px] lg:px-[292px]">
        <div className="relative">
          <Image
            src={"/characters-solder.png"}
            alt="characters-solder"
            className="mx-auto pt-24 lg:px-0 px-4"
            width={550}
            height={600}
          />
          <div className="lg:absolute lg:-left-[15%] lg:top-[70%] lg:transform mx-[10px] sm:mx-auto lg:mx-0 mt-[30px] lg:mt-0 lg:-translate-y-1/2 max-w-[562px] pb-[75px] pt-[79px] px-[40px] lg:py-[94px] lg:px-[82px] character__card">
            <h2 className="font-camieis uppercase text-[18px] lg:text-2xl mb-[13px] lg:mb-[52px]">
              Upgrades
            </h2>
            <div className="max-w-[440px] leading-[140%] space-y-[22px] text-[10px] lg:text-base">
              <p>
                During each stage, the player defeats enemies, from which
                crystals drop. These crystals convert into experience points and
                levels. For each level gained, the player earns one skill point.
                Upon completing the stage, the player is presented with a choice
                of three abilities for each skill point.
              </p>
              <p>
                The chosen effects stack, allowing the player to combine them
                and select the most effective build for their playstyle. Some
                abilities can be combined to obtain enhanced versions of skills
                - evolution. In the event of the player's death, they lose all
                enhancements acquired during the last game cycle.Characters have
                different weapons and unique characteristics.
              </p>
              <p>
                Playing as each character requires time to master, as the
                mechanics of each character are unique. We create diverse
                characters to cater to different players.
              </p>
            </div>
          </div>

          <div className="lg:absolute top-1/4 right-12 mt-12 lg:mt-0 mx-2.5 lg:mx-0">
            <h4 className="font-camieis mb-[30px] text-2xl">Power-ups</h4>
            <div className="flex sm:flex-col flex-row ">
              <div className="max-w-[186px] mb-11">
                <Image
                  src={"/shilt.svg"}
                  alt="shilt"
                  width={110}
                  height={110}
                />
                <p className="mb-3 text-[18px] mt-3 font-bold">Double damage</p>
                <p>Doubles the outgoing damage of all types of attacks</p>
              </div>
              <div className="max-w-[186px]">
                <Image
                  src={"/energy.svg"}
                  alt="energy"
                  width={110}
                  height={110}
                />
                <p className="mb-3 text-[18px] mt-3 font-bold">Double damage</p>
                <p>Doubles the outgoing damage of all types of attacks</p>
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
      </div>
    </section>
  );
};

export default Characters;
