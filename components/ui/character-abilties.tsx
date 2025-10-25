import Image from "next/image";

const CharacterAbilties = () => {
  return (
    <div className="px-41">
      <h4 className="font-camieis mb-[30px] text-2xl">Power-ups</h4>
      <div className="flex flex-row lg:flex-col gap-[25px] lg:gap-0">
        <div className="mb-11">
          <Image src={"/shilt.svg"} alt="shilt" width={110} height={110} />
          <p className="mb-3 text-[18px] mt-3 font-bold">Double damage</p>
          <p className="text-[13px] lg:text-base max-w-[185px]">
            Doubles the outgoing damage of all types of attacks
          </p>
        </div>
        <div className="">
          <Image src={"/energy.svg"} alt="energy" width={110} height={110} />
          <p className="mb-3 text-[18px] mt-3 font-bold">Invincibility</p>
          <p className="text-[13px] lg:text-base max-w-[185px]">
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
  );
};

export default CharacterAbilties;
