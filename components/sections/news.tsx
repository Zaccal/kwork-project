import Image from "next/image";

const News = () => {
  return (
    <section className="relative z-10 flex justify-between items-center pb-[54px] pt-[62px] md:pt-[117px]">
      <Image
        src={"/news-bg.png"}
        alt="news-bg"
        width={1920}
        height={1080}
        className="w-full h-full hidden md:block absolute z-[-1] left-0 top-1/2 -translate-y-1/2"
      />
      <Image
        src={"/news-bg-mobile.png"}
        alt="news-bg"
        width={1920}
        height={1080}
        className="w-full h-full md:hidden absolute z-[-1] left-0 top-1/2 -translate-y-1/2"
      />
      <div className="space-y-[70px] md:block hidden">
        <Image
          src={"/news-dots.png"}
          alt="news-dots"
          width={138}
          height={78}
          className="mx-auto"
        />
        <Image
          src={"/news-circles.png"}
          alt="news-circles"
          width={173}
          height={41}
          className="mx-auto "
        />
      </div>
      <div className="">
        <Image
          src={"/news-stars.png"}
          alt="news-stars"
          width={846}
          height={43}
          className="mx-auto md:block hidden"
        />

        <h1 className="text-xl md:px-0 px-8 sm:text-2xl md:text-5xl mt-[63px] leading-[120%] font-camieis max-w-[800px] uppercase text-center mx-auto">
          Stay tuned for the latest news and updates coming soon!
        </h1>
        <div className="flex justify-center pt-[31px] md:mt-[60px] md:pb-[54px] mb-[47px]">
          <button className="bg-[url('/news-btn.png')] bg-contain bg-center bg-no-repeat font-camieis text-base md:text-2xl mx-auto text-white px-[51px] text-nowrap py-[24px]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="space-y-[70px] md:block hidden">
        <Image
          src={"/news-dots.png"}
          alt="news-dots"
          width={138}
          height={78}
          className="mx-auto"
        />
        <Image
          src={"/news-circles.png"}
          alt="news-circles"
          width={173}
          height={41}
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default News;
