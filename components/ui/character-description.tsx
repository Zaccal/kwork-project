import Image from "next/image";

const CharacterDescription = () => {
  return (
    <>
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
              During each stage, the player defeats enemies, from which crystals
              drop. These crystals convert into experience points and levels.
              For each level gained, the player earns one skill point. Upon
              completing the stage, the player is presented with a choice of
              three abilities for each skill point.
            </p>
            <p>
              The chosen effects stack, allowing the player to combine them and
              select the most effective build for their playstyle. Some
              abilities can be combined to obtain enhanced versions of skills -
              evolution. In the event of the player's death, they lose all
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
      </div>
    </>
  );
};

export default CharacterDescription;
