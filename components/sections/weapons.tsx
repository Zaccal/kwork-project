import Image from "next/image";

const Weapons = () => {
  return (
    <section className="weapon pb-[100vh] pt-[237px]">
      <h1 className="font-camieis uppercase text-[100px] text-center mb-[70px]">
        NFT weapons
      </h1>

      <p className="max-w-[466px] text-[18px] mx-auto mb-[75px]">
        Earn more effectively with NFT weapons boasting increased firepower,
        allowing you to quickly eliminate hordes of mutants. More points, more
        rewards.
      </p>
      <div className="flex gap-[60px] container">
        <Image src="/card-1.png" alt="card-1" width={300} height={442} />
        <Image src="/card-1.png" alt="card-1" width={300} height={442} />
        <Image src="/card-1.png" alt="card-1" width={300} height={442} />
        <Image src="/card-1.png" alt="card-1" width={300} height={442} />
      </div>
      <div className="flex justify-center mt-[60px]">
        <button className="btn_watch-trailer font-camieis text-base md:text-2xl mx-auto text-white px-[61px] text-nowrap py-[43px]">
          NFT Marketplace
        </button>
      </div>
    </section>
  );
};

export default Weapons;
