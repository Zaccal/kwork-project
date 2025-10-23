"use client";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="font-camieis text-[13px] bg-black lg:bg-transparent relative z-50">
      <div className="container">
        <div className="py-5 lg:py-[13px] px-6 lg:px-[79px] flex items-center justify-between text-white lg:bg-black header_bg">
          <Image src="/Logo.png" alt="logo" width={43.15} height={38.83} />
          <ul className="hidden lg:flex gap-[42px] uppercase">
            <li>
              <a href="#overview">ABOUT US</a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1FR44chLJU_u0HIrK4GfGGQYg7hB2mCp4ojwYkDu7970/edit?tab=t.0#heading=h.gar1d6bvexu3"
              >
                GAMEPAPER
              </a>
            </li>
            <li>
              <a href="#characters">CHARACTERS</a>
            </li>
            <li>
              <a href="#nfts">NFTS</a>
            </li>
            <li>
              <a href="#roadmap">ROADMAP</a>
            </li>
          </ul>
          <button className="hidden lg:flex btn_light items-center gap-[6.62px] text-[13px] text-[#dd0601] px-2.5 py-[18px]">
            <Image src={"/rock.png"} alt="rock" width={18.38} height={21} />
            <span>Connect Wallet</span>
          </button>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? (
                <Image
                  src="/burger-open.svg"
                  alt="burger"
                  width={28}
                  height={20}
                />
              ) : (
                <Image src="/burger.svg" alt="burger" width={28} height={20} />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-full right-0 max-w-[260px] w-full bg-black/90 backdrop-blur-sm">
          <ul className="flex flex-col items-center gap-6 uppercase text-white py-8">
            <li>
              <a onClick={() => setIsOpen(false)} href="#overview">
                ABOUT US
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsOpen(false)}
                target="_blank"
                href="https://docs.google.com/document/d/1FR44chLJU_u0HIrK4GfGGQYg7hB2mCp4ojwYkDu7970/edit?tab=t.0#heading=h.gar1d6bvexu3"
              >
                GAMEPAPER
              </a>
            </li>
            <li>
              <a onClick={() => setIsOpen(false)} href="#characters">
                CHARACTERS
              </a>
            </li>
            <li>
              <a onClick={() => setIsOpen(false)} href="#nfts">
                NFTS
              </a>
            </li>
            <li>
              <a onClick={() => setIsOpen(false)} href="#roadmap">
                ROADMAP
              </a>
            </li>
          </ul>
          <div className="flex justify-center pb-8">
            <button className="btn_light flex items-center gap-[6.62px] text-[10px] lg:text-[13px] text-[#dd0601] px-2.5 py-[18px]">
              <Image src={"/rock.png"} alt="rock" width={18.38} height={21} />
              <span>Connect Wallet</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
