"use client";

import { createContext } from "@/hooks/createContext";
import { useEffect } from "react";

interface TrailerVideoProps {
  children?: React.ReactNode | React.ReactNode[];
}

interface TrailerVideoContextProps {
  open: boolean;
}

const TrailerVideoContext = createContext<TrailerVideoContextProps>({
  open: false,
});

export const TrailerVideo = ({ children }: TrailerVideoProps) => {
  return (
    <TrailerVideoContext.Provider
      initialValue={{
        open: false,
      }}
    >
      {children}
    </TrailerVideoContext.Provider>
  );
};

export const TrailerVideoTrigger = ({ children }: TrailerVideoProps) => {
  const { set } = TrailerVideoContext.useSelect();
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        set({ open: true });
        window.document.body.style.overflow = "hidden";
      }}
    >
      {children}
    </div>
  );
};

interface TrailerVideoContentProps {
  link: string;
}

export const TrailerVideoContent = ({ link }: TrailerVideoContentProps) => {
  const open = TrailerVideoContext.useSelect((state) => state.open);
  const { set } = TrailerVideoContext.useSelect();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        set({ open: false });
        window.document.body.style.overflow = "auto";
      }
    };
    if (open) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, set]);

  if (!open) return null;

  return (
    <div
      onClick={() => {
        set({ open: false });
        window.document.body.style.overflow = "auto";
      }}
      className="fixed flex items-center justify-center left-0 top-0 bg-black/25 w-screen h-screen z-40"
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-lg max-w-[860px] max-h-[489px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full px-4"
          src={link}
          title="Game Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
