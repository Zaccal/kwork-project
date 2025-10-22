import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mt-[63px] pb-[96px]">
      <div className="flex justify-between items-center">
        <Image src={"/Logo.png"} alt="Logo" width={100} height={91} />
        <div className="flex items-center gap-[42px]">
          <a href="#">
            <Image src={"/X.png"} alt="X" width={24} height={24} />
          </a>
          <a href="#">
            <Image src={"/discord.png"} alt="Discord" width={24} height={24} />
          </a>
          <a href="#">
            <Image
              src={"/telegram.png"}
              alt="Telegram"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
      <div className="font-camieis flex items-center justify-between mt-[42px]">
        <p>Atum's drop</p>
        <p>Try Demo</p>
        <p>Gamepaper</p>
        <p>Tokenomics</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <p className="font-camieis text-center text-[13px] mt-[62px] text-[#858585]">
        © 2026 Atum's Abyss. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
