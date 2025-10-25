import Image from "next/image";

const CharacterSolderMobile = () => {
  return (
    <div className="relative mb-[30px]">
      <Image
        src={"/characters-solder-mobile.png"}
        alt="characters-solder-mobile"
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
  );
};

export default CharacterSolderMobile;
