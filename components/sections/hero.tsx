import Image from "next/image";

interface HeroSectionProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="relative pb-8 lg:pb-[94px] font-camieis hero">
      {children}
      <div className="container mx-auto pt-[59px] text-center">
        <div className="relative inline-block lg:mb-8 mx-auto w-fit">
          <Image
            className="absolute top-1/2 left-0 lg:block hidden"
            src="/stars.svg"
            alt="stars"
            width={44}
            height={106}
          />
          <Image
            className="absolute top-1/2 right-0 lg:block hidden"
            src="/stars.svg"
            alt="stars"
            width={44}
            height={106}
          />
          <div className="z-20 circle-mask absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 lg:border-[3px] border-white rounded-full transform size-[372px] lg:size-[1000px]"></div>
          <p className="text-base lg:text-[32px] text-center tracking-[0.9em] mb-16 lg:mb-[80px] mt-8 lg:mt-[108px]">
            SHOOTER
          </p>
          <Image
            src="/solders.png"
            alt="Soldiers"
            width={1200}
            height={796}
            className="z-10 relative right-[-20px] lg:right-[-110px] w-[320px] h-auto lg:w-[1200px]"
          />
          <div className="absolute bottom-[-20px] lg:bottom-0 z-30 left-1/2 -translate-x-1/2 w-full flex justify-center items-center gap-x-8">
            <Image
              src="/title_element_left.svg"
              alt="title_element_left"
              className="absolute -left-[92px] lg:block hidden"
              width={94}
              height={56}
            />
            <div className="relative block border lg:border-[3px] border-white lg:bg-transparent">
              <h1 className="uppercase py-2 lg:pt-[59px] lg:pb-[37px] pl-[19px] pr-[14px] lg:pl-[61px] lg:pr-[45px] text-[30px] lg:text-[102px]">
                Atum's Abyss
              </h1>
            </div>
            <Image
              src="/title_element_right.svg"
              alt="title_element_right"
              className="absolute -right-[33px] lg:block hidden"
              width={107}
              height={94}
            />
          </div>
        </div>
        <p className="text-lg lg:text-[32px] mt-12 lg:mt-0">
          Conquer the Abyss Become a Legend!
        </p>
        <div className="flex flex-col lg:hidden items-center gap-4 mt-6">
          <button className="uppercase w-full max-w-xs py-4 btn-secondary">
            Whitepaper
          </button>
          <button className="uppercase w-full max-w-xs py-4 btn-primary">
            Download game
          </button>
        </div>
        <div className="mx-auto w-fit mt-8 lg:mt-[45px] flex items-center gap-8 lg:gap-[50px]">
          <a
            target="_blank"
            href="https://x.com/atumsabyss?amp;t=ZWtpFXI_vRnyFtYoUAlwcw"
          >
            <Image
              src="/X.png"
              alt="X"
              width={50}
              height={56}
              className="w-8 h-auto lg:w-[50px]"
            />
          </a>
          <a target="_blank" href="https://t.me/AtumsAbyss">
            <Image
              src="/telegram.png"
              alt="Telegram"
              width={50}
              height={56}
              className="w-8 h-auto lg:w-[50px]"
            />
          </a>
          <a target="_blank" href="https://t.me/+1Hy1N675pqg2ZjYy">
            <Image
              src="/telegram-chat.png"
              alt="Telegram Chat"
              width={44}
              height={56}
              className="w-7 h-auto lg:w-[44px]"
            />
          </a>
        </div>
      </div>
      <div className="hidden lg:flex items-end justify-between">
        <Image
          src="/element-left-side.png"
          alt="Element Left Side"
          width={307.9}
          height={167.03}
        />
        <div className="flex items-center gap-[25px] mt-[50px]">
          <a
            href="#"
            className="uppercase px-[77px] pt-[43px] pb-[50px] btn-primary"
          >
            Download game
          </a>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1FR44chLJU_u0HIrK4GfGGQYg7hB2mCp4ojwYkDu7970/edit?tab=t.0#heading"
            className="uppercase px-[100px] pt-[43px] pb-[50px] btn-secondary"
          >
            Whitepaper
          </a>
        </div>
        <Image
          src="/element-right-side.png"
          alt="Element Right Side"
          width={307.9}
          height={167.03}
        />
      </div>
    </section>
  );
}
