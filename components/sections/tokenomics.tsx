import Image from "next/image";

const Tokenomics = () => {
  return (
    <section className="relative bg-[url('/tokenomics-bg.png')] bg-no-repeat bg-contain h-screen bg-top">
      <Image
        src={"/tokenomics-element.svg"}
        alt="element"
        width={194}
        height={215}
        className="absolute top-[100px] left-[40px]"
      />
      <Image
        src={"/tokenomics-element.svg"}
        alt="element"
        width={194}
        height={215}
        className="absolute top-[100px] right-[40px]"
      />
      <h1 className="pt-[77px] font-camieis uppercase text-center text-[100px]">
        Tokenomics
      </h1>
      <div className="container relative">
        <div className="relative mt-[146px] z-10 bg-[url('/character-bg-card.png')] bg-no-repeat bg-cover pt-[74px] pl-[74px] pr-[70px] pb-[82px] max-w-[562px]">
          <h2 className="font-camieis text-2xl uppercase mb-[52px]">$ATU</h2>
          <p className="mb-[190px]">
            Atum's Abyss represents a unique gaming ecosystem with its own
            tokenomics centered around the $ATU token. This ecosystem is
            designed to create value for players through interconnected gaming
            mechanisms and economic incentives.
          </p>
          <div className="flex justify-center">
            <button className="btn_watch-trailer font-camieis text-base md:text-2xl mx-auto text-white px-[110px] text-nowrap py-[43px]">
              Tokenomics
            </button>
          </div>
        </div>
        <Image
          src={"/tokenomics-monster.png"}
          alt="monster"
          width={1235}
          height={1279}
          className="absolute z-[1] -top-14 left-1/2 -translate-x-1/2"
        />
        <div className="absolute bottom-1/2 left-[60%] z-10">
          <p className="text-2xl font-camieis flex flex-col">
            <span>Token</span>
            <span className="text-[42px] text-[#DD0403]">$ATU</span>
          </p>
        </div>

        <h3 className="mt-[131px] font-camieis uppercase text-2xl">
          Use cases
        </h3>
        <div className="relative z-10 flex items-start mt-[37px] gap-[70px] font-camieis uppercase">
          <ul className="space-y-[22px]">
            <li className="flex gap-5 items-center">
              <Image src={"/list.svg"} alt="list" width={34} height={34} />
              <p>Trading NFT assets between players</p>
            </li>
            <li className="flex gap-5 items-center">
              <Image src={"/list.svg"} alt="list" width={34} height={34} />
              <p>Buying consumables</p>
            </li>
            <li className="flex gap-5 items-center">
              <Image src={"/list.svg"} alt="list" width={34} height={34} />
              <p>Buying characters</p>
            </li>
            <li className="flex gap-5 items-center">
              <Image src={"/list.svg"} alt="list" width={34} height={34} />
              <p>Buying skins</p>
            </li>
          </ul>
          <ul className="space-y-[22px]">
            <li className="flex gap-5 items-center">
              <Image src={"/list.svg"} alt="list" width={34} height={34} />
              <p>Trading NFT assets between players</p>
            </li>
            <li className="flex gap-5 items-center">
              <Image src={"/list.svg"} alt="list" width={34} height={34} />
              <p>Buying consumables</p>
            </li>
            <li className="flex gap-5 items-center">
              <Image src={"/list.svg"} alt="list" width={34} height={34} />
              <p>Buying characters</p>
            </li>
            <li className="flex gap-5 items-center">
              <Image src={"/list.svg"} alt="list" width={34} height={34} />
              <p>Buying skins</p>
            </li>
            <div className="mt-[100px] ml-12">
              <p className="text-2xl font-camieis flex flex-col">
                <span>Contract address</span>
                <span className="text-[42px] text-[#DD0403]">Soon</span>
              </p>
            </div>
          </ul>
        </div>
      </div>
      <div className="h-screen bg-[url('/tokenomics-bg-2.png')] bg-no-repeat bg-cover"></div>
    </section>
  );
};

export default Tokenomics;
