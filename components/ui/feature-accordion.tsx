import type { AccordionSetter } from "./accordion/accordion";
import { Accordion, AccordionItem } from "./accordion/accordion";
import Image from "next/image";

interface FeatureAccordionProps {
  setter?: AccordionSetter;
}

const FeatureAccordion = ({ setter }: FeatureAccordionProps) => {
  return (
    <>
      <Accordion setterToGetActiveValue={setter} defaultValue="weapons">
        <AccordionItem
          title={
            <>
              <div className="flex items-baseline-last lg:items-center uppercase gap-[16px] lg:gap-[17px]">
                <h2 className="text-nowrap text-xl lg:text-[48px] relative w-fit font-camieis lg:mt-[30px]">
                  Weapons
                </h2>
                <span className="text-[18px] lg:text-[24px] font-rimma">
                  +10
                </span>
              </div>
            </>
          }
          value="weapons"
        >
          <p className="leading-[140%] max-w-[342px] mt-3">
            The player's arsenal includes a variety of weapons: rifles, circular
            saws, swarms of self-guided missiles, napalm drones, and much more.
            In addition to weapons, skills such as jumping, dashing, and firing
            rate can be upgraded. At the beginning of the game, 4-8 skills are
            available. As goals are achieved, dozens of different skills and new
            characters are unlocked.
          </p>
          <Image
            width={351}
            height={351}
            src={"/feature-bg.png"}
            className="mt-5 mb-6 lg:hidden block"
            alt="feature-container"
            loading="eager"
          />
        </AccordionItem>
        <AccordionItem
          title={
            <>
              <div className="flex items-baseline-last lg:items-center uppercase gap-[16px] lg:gap-[17px]">
                <h2 className="text-nowrap text-xl lg:text-[48px] relative w-fit font-camieis lg:mt-[30px]">
                  Location
                </h2>
                <span className="text-[18px] lg:text-[24px] font-rimma">
                  +5
                </span>
              </div>
            </>
          }
          value="location"
        >
          <p className="leading-[140%] max-w-[342px] mt-3">
            Levels are generated based on randomly generated cells. This means
            that each stage occurs on a procedurally created level. Levels
            feature interactive objects that both the player character and
            enemies can interact with, for example, large circular saws that can
            damage both the player character and enemies.
          </p>
          <Image
            width={351}
            height={351}
            src={"/feature-bg-location.png"}
            className="mt-5 mb-6 lg:hidden block"
            alt="feature-container"
            loading="eager"
          />
        </AccordionItem>
        <AccordionItem
          title={
            <>
              <div className="flex items-baseline-last lg:items-center uppercase gap-[16px] lg:gap-[17px]">
                <h2 className="text-nowrap text-xl lg:text-[48px] relative w-fit font-camieis lg:mt-[30px]">
                  Heroes
                </h2>
                <span className="text-[18px] lg:text-[24px] font-rimma">
                  +3
                </span>
              </div>
            </>
          }
          value="heroes"
        >
          <p className="leading-[140%] max-w-[342px] mt-3">
            Each hero's unique abilities will shape the course of your journey,
            turning you into a formidable force. Embrace your role as a survivor
            and unleash the bravery within, for it is your strength and unity
            that will determine whether humanity prevails or succumbs to the
            mutants and monsters from the abyss.
          </p>
          <Image
            width={351}
            height={351}
            src={"/feature-bg-heros.png"}
            className="mt-5 mb-6 lg:hidden block"
            alt="feature-container"
            loading="eager"
          />
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FeatureAccordion;
