"use client";
import React, { useState } from "react";

// Define the type for the collapse items
interface CollapseItem {
  activeHeading: string;
  body: string;
}

interface HorizontalCollapseMobileProps {
  collapseItems: CollapseItem[];
}

const HorizontalCollapseMobile: React.FC<HorizontalCollapseMobileProps> = ({
  collapseItems,
}) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  // Function to toggle the state
  const toggle = (idx: number) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <>
      {collapseItems.map((PerAccordion, idx) => (
        <div
          key={idx}
          className="my-3 rounded-lg border border-[#ffffff1a] p-4"
        >
          <button
            onClick={() => toggle(idx)}
            className="flex h-full w-full items-center justify-between font-medium text-white outline-none"
            aria-expanded={isOpen === idx ? "true" : "false"}
          >
            <h1 className="text-2xl">{PerAccordion.activeHeading}</h1>
            <span className="rounded-full">
              <svg
                className="ml-8 size-3 shrink-0 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="5"
                  width="12"
                  height="2"
                  rx="1"
                  className={`origin-center transform transition duration-200 ease-out ${
                    isOpen === idx && "!rotate-180"
                  }`}
                />
                <rect
                  y="5"
                  width="12"
                  height="2"
                  rx="1"
                  className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                    isOpen === idx && "!rotate-180"
                  }`}
                />
              </svg>
            </span>
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen === idx
                ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden pr-4">{PerAccordion.body}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HorizontalCollapseMobile;
