import Image from "next/image";

const News = () => {
  return (
    <section className="flex justify-between items-center bg-[url('/news-bg.png')] bg-no-repeat bg-contain pb-[54px]">
      <div className="space-y-[70px] pt-8">
        <Image
          src={"/news-dots.png"}
          alt="news-dots"
          width={138}
          height={78}
          className="mx-auto pt-[21px]"
        />
        <Image
          src={"/news-circles.png"}
          alt="news-circles"
          width={173}
          height={41}
          className="mx-auto pt-[21px]"
        />
      </div>
      <div className="">
        <Image
          src={"/news-stars.png"}
          alt="news-stars"
          width={846}
          height={43}
          className="mx-auto pt-[21px]"
        />

        <h1 className="text-5xl mt-[63px] leading-[120%] font-camieis max-w-[800px] uppercase text-center mx-auto">
          Stay tuned for the latest news and updates coming soon!
        </h1>
        <div className="flex justify-center mt-[60px]">
          <button className="btn_watch-trailer font-camieis text-base md:text-2xl mx-auto text-white px-[51px] text-nowrap py-[24px]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="space-y-[70px] pt-8">
        <Image
          src={"/news-dots.png"}
          alt="news-dots"
          width={138}
          height={78}
          className="mx-auto pt-[21px]"
        />
        <Image
          src={"/news-circles.png"}
          alt="news-circles"
          width={173}
          height={41}
          className="mx-auto pt-[21px]"
        />
      </div>
    </section>
  );
};

export default News;
