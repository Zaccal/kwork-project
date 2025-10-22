"use client";
import Image from "next/image";

interface ReoadmapCardProps {
  title: string;
  items: string[];
}

const ReoadmapCard = ({ title, items }: ReoadmapCardProps) => {
  return (
    <>
      <div className="max-w-[374px]">
        <div className="font-rimma bg-[url('/roadmap-card.png')] bg-no-repeat bg-cover w-full max-w-[336px] pr-[170px] pl-[28px] py-3.5">
          <p className={`uppercase text-2xl text-nowrap  text-black`}>
            {title}
          </p>
        </div>

        <ul className="space-y-[22px] mt-12">
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
