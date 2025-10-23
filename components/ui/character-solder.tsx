import Image from "next/image";

const CharacterSolder = () => {
  return (
    <>
      <Image
        src={"/characters-solder.png"}
        alt="characters-solder"
        className=" xl:block hidden"
        width={600}
        height={600}
      />
    </>
  );
};

export default CharacterSolder;
