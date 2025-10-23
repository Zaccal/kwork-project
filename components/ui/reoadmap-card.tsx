"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface ReoadmapCardProps {
  title: string;
  items: string[];
  active?: boolean;
  className?: string;
}

const ReoadmapCard = ({
  title,
  items,
  active = false,
  className,
}: ReoadmapCardProps) => {
  return (
    <>
      <div className={cn(className)}>
        <div className="relative font-rimma w-full max-w-[336px] pr-[170px] pl-[28px] py-3.5">
          {active && (
            <Image
              src={"/roadmap-card-active.png"}
              alt="roadmap-card"
              width={336}
              height={120}
              className="absolute top-0 left-0 w-full h-full"
            />
          )}
          {!active && (
            <Image
              src={"/roadmap-card.png"}
              alt="roadmap-card"
              width={336}
              height={120}
              className="w-full h-full absolute left-0 top-0"
            />
          )}
          <p
            className={cn(
              "uppercase text-2xl text-nowrap text-black relative z-10",
              active && "text-white"
            )}
          >
            {title}
          </p>
        </div>

        <ul className="space-y-[18px] mt-12">
          {items.map((item) => (
            <li key={item} className="flex gap-5 items-center">
              <Image src={"/list.svg"} alt="list" width={24} height={24} />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ReoadmapCard;
