import Image from "next/image";

const GameModels = () => {
  return (
    <section className="game-models">
      <h1 className="font-camieis uppercase text-center text-[100px]">
        Game models
      </h1>
      <div className="container flex items-start gap-[47px] mt-[103px]">
        <div className="pl-[31px] pr-[41px] pb-[71px] pt-[42px] max-w-[688px] bg-[url('/game-models-card.png')] bg-no-repeat bg-contain">
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
        <div className="pl-[31px] pr-[41px] pb-[49px] pt-[42px] max-w-[688px] bg-[url('/game-models-card-active.png')] bg-no-repeat bg-contain">
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

      <div className="h-screen bg-[url('/game-models-view-preview.png')] relative bg-no-repeat bg-contain flex items-center justify-center">
        <Image
          src={"/game-models-element.svg"}
          width={158}
          height={78}
          alt="player"
          className="absolute top-[100px] left-[100px]"
        />
        <Image
          src={"/game-models-element.svg"}
          width={158}
          height={78}
          alt="player"
          className="absolute top-[100px] right-[100px]"
        />
        <Image src={"/player.svg"} width={165} height={165} alt="player" />

        <Image
          src={"/game-models-bg-element-left.png"}
          width={307}
          height={167}
          alt="player"
          className="absolute bottom-[25px] left-0"
        />
        <Image
          src={"/game-models-bg-element-right.png"}
          width={307}
          height={167}
          alt="player"
          className="absolute bottom-[25px] right-0"
        />
      </div>
    </section>
  );
};

export default GameModels;
