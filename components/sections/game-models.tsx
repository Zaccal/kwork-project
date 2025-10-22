import Image from "next/image";

const GameModels = () => {
  return (
    <section className="game-models">
      <h1 className="font-camieis uppercase text-center text-[32px] md:text-7xl lg:text-[100px]">
        Game models
      </h1>
      <div className="container flex xl:flex-row flex-col items-center xl:items-start gap-[47px] mt-[34px] md:mt-[70px] lg:mt-[103px]">
        <div className="pl-[31px] pr-[41px] pb-[71px] pt-[42px] max-w-[688px] relative">
          <Image
            src={"/game-models-card.png"}
            alt="game-models-card"
            className="absolute top-0 left-0 w-full h-full"
            width={688}
            height={688}
          />
          <h4 className="font-camieis text-2xl uppercase mb-[30px]">
            Free to Play
          </h4>
          <p className="text-[#858585]">
            The F2P model will be an integral part of all games. Each player has
            the opportunity to get an NFT for free, which will allow them to
            activate the P2E mode and earn. All it takes is for the player to
            score points by playing the games.
          </p>
        </div>
        <div className="pl-[31px] pr-[41px] pb-[71px] pt-[42px] max-w-[688px] relative">
          <Image
            src={"/game-models-card-active.png"}
            alt="game-models-card-active"
            className="absolute top-0 left-0 w-full h-full"
            width={688}
            height={688}
          />
          <h4 className="font-camieis text-2xl uppercase mb-[30px]">
            Play to Earn
          </h4>
          <p className="text-[#858585]">
            The P2E game model provides new opportunities for players such as
            receiving token rewards by playing the games and control over their
            digital assets obtained through gameplay or contributions. In-game
            tokens and NFT assets always belong to the players, as they can be
            easily converted into fiat currencies.
          </p>
        </div>
      </div>

      <div className="h-[50vh] sm:h-screen relative bg-no-repeat bg-contain flex items-center justify-center">
        <Image
          src={"/game-models-view-preview.png"}
          alt="game-models-view-preview"
          width={1920}
          height={1080}
          className="w-full h-full left-[60%] -translate-x-1/2 absolute z-[-1]"
        />
        <Image
          src={"/game-models-element.svg"}
          width={158}
          height={78}
          alt="player"
          className="absolute w-[36px] h-[26px] sm:w-[158px] sm:h-[78px] top-[100px] left-5 sm:left-[100px] z-[2]"
        />
        <Image
          src={"/game-models-element.svg"}
          width={158}
          height={78}
          alt="player"
          className="absolute w-[36px] h-[26px] sm:w-[158px] sm:h-[78px] top-[100px] right-5 sm:right-[100px] z-[2]"
        />
        <Image
          src={"/player.svg"}
          width={165}
          height={165}
          alt="player"
          className="w-[45px] h-[45px] sm:w-[165px] sm:h-[165px] z-[2]"
        />

        <Image
          src={"/game-models-bg-element-left.png"}
          width={307}
          height={167}
          alt="player"
          className="absolute sm:w-[307px] sm:h-[167px] w-[111px] h-[38px] bottom-[25px] left-0 z-[2]"
        />
        <Image
          src={"/game-models-bg-element-right.png"}
          width={307}
          height={167}
          alt="player"
          className="absolute bottom-[25px] right-0 z-[2] sm:w-[307px] sm:h-[167px] w-[111px] h-[38px]"
        />
      </div>
    </section>
  );
};

export default GameModels;
