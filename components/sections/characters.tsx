import Image from "next/image";
import CharacterDescription from "../ui/character-description";
import CharacterAbilties from "../ui/character-abilties";
import CharacterSolderMobile from "../ui/character-solder-mobile";
import CharacterSolder from "../ui/character-solder";

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
      <div className="relative bg-[#dd0403] min-h-[80vh] pt-[30px] xl:pb-0 pb-16">
        <CharacterSolderMobile />
        <div className="px-4 flex lg:flex-row flex-col gap-[36px] lg:gap-0 items-center lg:items-[none] justify-between mx-auto xl:ml-[2rem] 2xl:ml-[6rem] xl:mr-[4rem] 2xl:mr-[16rem]">
          <CharacterDescription />
          <CharacterAbilties />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -top-1/5">
          <CharacterSolder />
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
