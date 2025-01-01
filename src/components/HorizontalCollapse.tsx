import React from "react";
import "./style/HorizontalCollapse.scss";
import HorizontalCollapseItem from "./HorizontalCollapseItem";

const HorizontalCollapse = () => {
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
    <section className="js-horizontal-collapse horizontal-collapse">
      <ul className="horizontal-collapse__inner gap-6 rounded-md">
        {collapseItems.map((item) => (
          <HorizontalCollapseItem
            key={item.id}
            className={`horizontal-collapse__item--${item.id} border border-[#ffffff1a]`}
          >
            <div className="horizontal-collapse__inactive-content">
              <h2 className="horizontal-collapse__heading text-4xl">
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
      </ul>
    </section>
  );
};

export default HorizontalCollapse;