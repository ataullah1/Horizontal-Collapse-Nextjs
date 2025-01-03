"use client";
import React, { useState } from "react";
import "./style/HorizontalCollapse.scss";
import HorizontalCollapseItem from "./HorizontalCollapseItem";
import HorizontalCollapseMobile from "./HorizontalCollapseMobile";

const HorizontalCollapse = () => {
  // Set the default active item to the first one (index 0)
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index); // Toggle the active item or collapse if it's already active
  };

  // Dynamic data array
  const collapseItems = [
    {
      id: 1,
      inactiveHeading: "One inactive",
      activeHeading: "One active",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi laudantium facere aut, nemo praesentium, labore doloremque, porro ipsam qui nihil animi ea maiores. Ut excepturi quae veritatis. Recusandae, cupiditate?",
    },
    {
      id: 2,
      inactiveHeading: "Two inactive inactive",
      activeHeading: "Two active",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi laudantium facere aut, nemo praesentium, labore doloremque, porro ipsam qui nihil animi ea maiores. Ut excepturi quae veritatis. Recusandae, cupiditate?",
    },
    {
      id: 3,
      inactiveHeading: "Three inactive",
      activeHeading: "Three active",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi laudantium facere aut, nemo praesentium, labore doloremque, porro ipsam qui nihil animi ea maiores. Ut excepturi quae veritatis. Recusandae, cupiditate?",
    },
    {
      id: 4,
      inactiveHeading: "Four inactive Four",
      activeHeading: "Four active",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi laudantium facere aut, nemo praesentium, labore doloremque, porro ipsam qui nihil animi ea maiores. Ut excepturi quae veritatis. Recusandae, cupiditate?",
    },
    {
      id: 5,
      inactiveHeading: "Five inactive",
      activeHeading: "Five active",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi laudantium facere aut, nemo praesentium, labore doloremque, porro ipsam qui nihil animi ea maiores. Ut excepturi quae veritatis. Recusandae, cupiditate?",
    },
  ];

  return (
    <section className="p-5">
      <div className="hidden lg:block">
        <div className="js-horizontal-collapse horizontal-collapse">
          <div className="horizontal-collapse__inner gap-6 rounded-md">
            {collapseItems.map((item, index) => (
              <HorizontalCollapseItem
                key={item.id}
                className={`horizontal-collapse__item--${item.id} border border-[#ffffff1a] min-h-[400px] p-5`}
                isActive={activeIndex === index} // Pass the active state to each item
                onClick={() => handleItemClick(index)} // Handle click event for the item
              >
                <div className="horizontal-collapse__inactive-content left-1/2 -translate-x-1/2">
                  <h2 className="horizontal-collapse__heading text-4xl z-10">
                    {item.inactiveHeading}
                  </h2>
                </div>
                <div className="horizontal-collapse__active-content">
                  <h2 className="horizontal-collapse__heading text-3xl">
                    {item.activeHeading}
                  </h2>
                  <p className="horizontal-collapse__body">{item.body}</p>
                </div>
              </HorizontalCollapseItem>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full lg:hidden">
        <HorizontalCollapseMobile collapseItems={collapseItems} />
      </div>
    </section>
  );
};

export default HorizontalCollapse;
