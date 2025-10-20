const OverviewSection = () => {
  return (
    <section className="overview pb-[294px] py-[124px]">
      <div className="px-2">
        <h2 className="max-w-[343px] sm:max-w-[1313px] text-center mx-auto font-camieis text-xl md:text-3xl lg:text-5xl">
          Combination of Survivor, Platformer, and Roguelite genres
        </h2>
        <div className="max-w-[452px] mx-auto mt-[34px]">
          <h3 className="text-[#FF344C] text-[20px] md:text-[25px] font-light">
            Setting: Sci-Fi
          </h3>
          <p className="mt-3.5 text-[#858585] leading-[140%]">
            During mysterious events, the space city "Atum" and its residents
            vanish without a trace. Three decades later, the city suddenly
            reappears in its former location, but its inhabitants remain
            inaccessible. A group of heroes embarks on a reconnaissance mission
            to this enigmatic city and realizes that all its residents have
            turned into mutants, and they must clear this dangerous city.{" "}
          </p>
          <p className="mt-8 text-[#858585] leading-[140%]">
            Heroes must break through hordes of terrifying monsters in search of
            salvation. The game levels consist of numerous randomly generated
            floors of the space city divided into stages. Upgrading weapons and
            character abilities, completing necessary tasks to survive,
            defending the only path to salvation, and, of course, destroying
            crowds of monsters along the way - these are the challenges heroes
            will face.
          </p>
        </div>
      </div>

      <div className="trailer flex items-center justify-center mt-[61px] max-w-[972px] max-h-[596px] pt-[76px] pb-[80px] pr-[79px] pl-[69px] sm:px-[291px] sm:py-[237px]">
        <button className="btn_watch-trailer font-camieis text-base md:text-2xl text-white px-[36px] text-nowrap md:px-[87px] py-[25px] md:pt-[43px] md:pb-[50px]">
          Watch trailer
        </button>
      </div>
    </section>
  );
};

export default OverviewSection;
