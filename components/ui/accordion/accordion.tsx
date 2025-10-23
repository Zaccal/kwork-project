"use client";

import type { Dispatch, SetStateAction, ReactElement } from "react";
import { createContext } from "@/hooks/createContext";

export type AccordionSetter =
  | Dispatch<SetStateAction<string | null>>
  | ((value: string) => void);

interface AccordionItemProps {
  children: React.ReactNode | React.ReactNode[];
  title: string | React.ReactNode | React.ReactNode[];
  value: string;
}

interface AccordionProps {
  children:
    | ReactElement<AccordionItemProps>
    | ReactElement<AccordionItemProps>[];
  defaultValue?: string;
  setterToGetActiveValue?: (value: string) => void;
}

interface AccordionContextType {
  active: string | null;
  setter?: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextType>();

export const Accordion = ({
  children,
  defaultValue,
  setterToGetActiveValue,
}: AccordionProps) => {
  return (
    <AccordionContext.Provider
      initialValue={{
        active: defaultValue ?? null,
        setter: setterToGetActiveValue,
      }}
    >
      <div className="space-y-[21px]">{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({
  children,
  title,
  value,
}: AccordionItemProps) => {
  const { value: contextValue, set } = AccordionContext.useSelect();
  const outsideSetter = AccordionContext.useSelect((state) => state.setter);

  return (
    <>
      <div
        className="flex items-center gap-[35px] md:gap-[37px]"
        onClick={() => {
          set({ ...contextValue!, active: value });
          outsideSetter?.(value);
        }}
      >
        {contextValue?.active === value ? (
          <span className="text-xl md:text-5xl font-rimma">-</span>
        ) : (
          <span className="text-xl md:text-5xl font-rimma">+</span>
        )}
        <div className="">{title}</div>
      </div>
      {contextValue?.active === value && (
        <div className="lg:pl-13">{children}</div>
      )}
    </>
  );
};
