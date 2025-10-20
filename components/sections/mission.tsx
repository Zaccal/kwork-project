import Image from "next/image";

const Mission = () => {
  return (
    <section className="mission relative h-screen mt-[-55px] font-camieis pb-[162px] pt-[333px]">
      <Image
        className="absolute left-0 -top-6"
        src={"/element-left-side.png"}
        alt="element-left-side"
        width={410}
        height={94}
      />
      <Image
        className="absolute right-0 -top-6"
        src={"/element-right-side.png"}
        alt="element-right-side"
        width={410}
        height={94}
      />

      <h1 className="uppercase relative  text-[100px] text-center">
        <Image
          className="absolute top-0 right-1/2 -translate-x-1/2"
          src="/title-soldiers.png"
          alt="title-soldiers"
          width={637}
          height={582}
        />
        <span>your mission</span>
      </h1>
    </section>
  );
};

export default Mission;
