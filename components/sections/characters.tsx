import Image from "next/image";

const Characters = () => {
  return (
    <section>
      <h1 className="font-camieis text-center mb-[100px] uppercase text-[100px] pt-[177px]">
        Characters
      </h1>
      <div className="characters__wrapper pb-[165px] px-[292px]">
        <div className="relative">
          <div className="absolute -left-[15%] top-[70%] transform -translate-y-1/2 max-w-[562px] py-[94px] px-[82px] character__card">
            <h2 className="font-camieis uppercase text-2xl mb-[52px]">
              Upgrades
            </h2>
            <div className="max-w-[440px] leading-[140%] space-y-[22px]">
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
          <Image
            src={"/characters-solder.png"}
            alt="characters-solder"
            className="mx-auto pt-24"
            width={550}
            height={600}
          />
          <div className="absolute top-1/4 right-0">
            <div className="max-w-[186px] mb-11">
              <h4 className="font-camieis mb-[30px] text-2xl">Power-ups</h4>
              <Image src={"/shilt.svg"} alt="shilt" width={110} height={110} />
              <p className="mb-3 text-[18px] mt-3 font-bold">Double damage</p>
              <p>Doubles the outgoing damage of all types of attacks</p>
            </div>
            <div className="max-w-[186px]">
              <h4 className="font-camieis mb-[30px] text-2xl">Power-ups</h4>
              <Image
                src={"/energy.svg"}
                alt="energy"
                width={110}
                height={110}
              />
              <p className="mb-3 text-[18px] mt-3 font-bold">Double damage</p>
              <p>Doubles the outgoing damage of all types of attacks</p>
            </div>

            <div className="flex mt-[70px] items-center gap-[5px]">
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
