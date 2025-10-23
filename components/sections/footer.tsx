import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mt-[63px] pb-[96px]">
      <div className="flex justify-between items-center">
        <Image
          className="mx-auto md:mx-0"
          src={"/Logo.png"}
          alt="Logo"
          width={100}
          height={91}
        />
        <div className="hidden md:flex items-center gap-[42px]">
          <a
            href="https://x.com/atumsabyss?amp;t=ZWtpFXI_vRnyFtYoUAlwcw"
            target="_blank"
          >
            <Image src={"/X.png"} alt="X" width={24} height={24} />
          </a>
          <a href="https://discord.gg/atumsabyss" target="_blank">
            <Image src={"/discord.png"} alt="Discord" width={24} height={24} />
          </a>
          <a href="https://t.me/AtumsAbyss" target="_blank">
            <Image
              src={"/telegram.png"}
              alt="Telegram"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
      <div className="font-camieis flex lg:flex-row flex-col lg:gap-0 gap-[16px] items-center justify-between mt-[42px]">
        <p>Atum's drop</p>
        <p>Try Demo</p>
        <p>Gamepaper</p>
        <p>Tokenomics</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex md:hidden mx-auto w-fit mt-[32px] items-center gap-[42px]">
        <a
          href="https://x.com/atumsabyss?amp;t=ZWtpFXI_vRnyFtYoUAlwcw"
          target="_blank"
        >
          <Image src={"/X.png"} alt="X" width={24} height={24} />
        </a>
        <a href="https://t.me/AtumsAbyss" target="_blank">
          <Image src={"/telegram.png"} alt="Telegram" width={24} height={24} />
        </a>
        <a href="https://t.me/+1Hy1N675pqg2ZjYy" target="_blank">
          <Image
            src={"/telegram-chat.png"}
            alt="Telegram Chat"
            width={24}
            height={24}
          />
        </a>
      </div>
      <p className="font-camieis text-center text-[13px] mt-[62px] text-[#858585]">
        © 2026 Atum's Abyss. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
