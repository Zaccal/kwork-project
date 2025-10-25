import Image from "next/image";

const Tokenomics = () => {
  return (
    <>
      <section className="relative md:bg-[url('/tokenomics-bg.png')] md:bg-no-repeat md:bg-contain min-h-screen h-full bg-top">
        <Image
          src={"/tokenomics-bg.png"}
          alt="bg"
          className="w-full h-[40vh] md:hidden left-0 top-0 absolute z-[-1]"
          width={1920}
          height={1080}
        />
        <Image
          src={"/tokenomics-element.svg"}
          alt="element"
          width={194}
          height={215}
          className="absolute top-[150px] md:top-[100px] left-[30px] md:left-[40px] lg:w-[194px] lg:h-[215px] md:w-[140px] md:h-[180px] w-[67px] h-[75px]"
        />
        <Image
          src={"/tokenomics-element.svg"}
          alt="element"
          width={194}
          height={215}
          className="absolute top-[150px] md:top-[100px] right-[30px] md:right-[40px] lg:w-[194px] lg:h-[215px] md:w-[140px] md:h-[180px] w-[67px] h-[75px]"
        />
        <h1 className="pt-[77px] font-camieis uppercase text-center text-[32px] md:text-5xl lg:text-6xl xl:text-[100px]">
          Tokenomics
        </h1>
        <Image
          src={"/tokenomics-monster.png"}
          alt="monster"
          width={1235}
          height={1279}
          className="absolute z-[1] top-1/12 md:top-[14%] left-1/2 -translate-x-1/2"
        />
        <div className="container relative">
          <div className="relative mt-[70%] lg:mt-[146px] z-10  pt-[74px] px-[40px] md:pl-[74px] md:pr-[70px] pb-[82px] max-w-[562px]">
            <Image
              src={"/character-bg-card.png"}
              className="w-full h-full absolute z-[-1] left-0 top-0"
              alt="card"
              width={562}
              height={562}
            />
            <h2 className="font-camieis text-2xl uppercase mb-[52px]">$ATU</h2>
            <p className="mb-[66px] md:mb-[190px]">
              Atum's Abyss represents a unique gaming ecosystem with its own
              tokenomics centered around the $ATU token. This ecosystem is
              designed to create value for players through interconnected gaming
              mechanisms and economic incentives.
            </p>
            <div className="flex justify-center">
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1FeNxNOHPnH0iZt31VsQRf3Ye6lh1jxUDWN_rpSQJEpA/edit?usp=drivesdk"
                className="btn_watch-trailer font-camieis text-base md:text-2xl mx-auto text-white px-[72px] md:px-[110px] text-nowrap py-[43px]"
              >
                Tokenomics
              </a>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 mx-auto lg:mx-auto w-fit lg:w-auto lg:absolute bottom-1/2 left-[60%] z-10">
            <p className="text-[18px] lg:text-2xl font-camieis flex flex-col">
              <span>Token</span>
              <span className="text-xl lg:text-[42px] text-[#DD0403]">
                $ATU
              </span>
            </p>
          </div>

          <h3 className="mt-[131px] font-camieis uppercase text-2xl">
            Use cases
          </h3>
          <div className="relative z-10 space-y-5 md:space-y-0 md:flex items-start mt-[37px] gap-[70px] font-camieis uppercase">
            <ul className="space-y-[22px] lg:text-base text-[13px]">
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
            <ul className="space-y-[22px] lg:text-base text-[13px]">
              <li className="flex gap-5 items-center">
                <Image src={"/list.svg"} alt="list" width={34} height={34} />
                <p>Buying in-game items</p>
              </li>
              <li className="md:hidden flex gap-5 items-center">
                <Image src={"/list.svg"} alt="list" width={34} height={34} />
                <p>Purchase of lands</p>
              </li>
              <li className="md:hidden flex gap-5 items-center">
                <Image src={"/list.svg"} alt="list" width={34} height={34} />
                <p>Energy recharge (P2E mode)</p>
              </li>
              <li className="flex gap-5 items-center">
                <Image src={"/list.svg"} alt="list" width={34} height={34} />
                <p>Level Up</p>
              </li>

              <li className="flex gap-5 items-center">
                <Image src={"/list.svg"} alt="list" width={34} height={34} />
                <p>Forging / Minting of NFT assets</p>
              </li>
              <li className="flex gap-5 items-center">
                <Image src={"/list.svg"} alt="list" width={34} height={34} />
                <p>Participation in additional modes / duels</p>
              </li>

              <div className="mt-[100px] md:ml-12">
                <p className="text-[18px] lg:text-2xl font-camieis flex flex-col">
                  <span>Contract address</span>
                  <span className="text-xl lg:text-[42px] text-[#DD0403]">
                    Soon
                  </span>
                </p>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <div className="md:block hidden h-screen bg-[url('/tokenomics-bg-2.png')] bg-no-repeat bg-cover"></div>
    </>
  );
};

export default Tokenomics;
