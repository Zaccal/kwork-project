import Image from "next/image";

const Mission = () => {
  return (
    <section className="mission relative font-camieis mt-[-55px] pb-[162px] pt-[214px] lg:pt-[333px]">
      <Image
        className="absolute w-[126px] h-[55px] sm:w-[226px] sm:h-[85px] md:w-[226px] md:h-[85px] lg:w-[380px] lg:h-[180px] -left-14 lg:left-0 -top-6"
        src={"/element-left-side.png"}
        alt="element-left-side"
        width={380}
        height={180}
      />
      <Image
        className="absolute w-[126px] h-[55px] sm:w-[226px] sm:h-[85px] md:w-[226px] md:h-[85px] lg:w-[380px] lg:h-[180px] -right-14 lg:right-0 -top-6"
        src={"/element-right-side.png"}
        alt="element-right-side"
        width={380}
        height={180}
      />

      <h1 className="uppercase relative  -mt-[78px] md:-mt-[30px] lg:mt-0 text-[32px] md:text-[64px] lg:text-[100px] text-center">
        <Image
          className="absolute bottom-4 md:bottom-7 lg:bottom-10 z-10 right-1/2 translate-x-1/2 w-[251px] h-[233px] md:w-[400px] md:h-[375px] lg:w-[637px] lg:h-[582px]"
          src="/title-soldiers.png"
          alt="title-soldiers"
          width={637}
          height={582}
        />
        <span className="z-20 relative">your mission</span>
      </h1>

      <div className="flex md:flex-row flex-col mx-auto px-4 gap-12 text-center w-fit mt-[86px] mb-[195px]">
        <div>
          <Image
            src={"/square-1.png"}
            alt="square-1"
            width={410}
            height={410}
          />
          <p className="max-w-[394px] mt-[21px] mx-auto">
            Explore all the floors of the space city
          </p>
        </div>
        <div>
          <Image
            src={"/square-2.png"}
            alt="square-2"
            width={410}
            height={410}
          />
          <p className="max-w-[355px] mt-[21px] mx-auto">
            Break through hordes of terrifying monsters in search of salvation
          </p>
        </div>
        <div className="">
          <Image
            src={"/square-3.png"}
            alt="square-3"
            width={410}
            height={410}
          />
          <p className="max-w-[401px] mt-[21px] mx-auto">
            Upgrade your skills to fight more effectively!
          </p>
        </div>
      </div>

      <blockquote className="max-w-[1361px] px-4 mx-auto mission__quote text-xl md:text-2xl lg:text-[34px]">
        Only the bravest will dare to go through all the floors of the secret
        laboratory and exterminate the
      </blockquote>
      <blockquote className="max-w-[533px] px-4 mx-auto ">
        <span className="text-xl md:text-2xl lg:text-[34px]">
          terrible zombies. Destroy them all and save humanity!
        </span>
        <p className="text-[18px] text-[#830606] mt-7">Good luck, Soldier!</p>
      </blockquote>
    </section>
  );
};

export default Mission;
