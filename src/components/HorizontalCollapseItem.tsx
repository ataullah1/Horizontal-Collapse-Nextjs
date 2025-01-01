"use client";

import React, { useState } from "react";
import { useClickAway } from "react-use";

interface HorizontalCollapseItemProps {
  className?: string;
  children: React.ReactNode;
}

const HorizontalCollapseItem: React.FC<HorizontalCollapseItemProps> = ({
  className,
  children,
}) => {
  const [isActive, setIsActive] = useState(false);
  const itemMinWidth = 100;
  const itemMaxWidth = 500;
  const ref = React.useRef<HTMLLIElement>(null);

  useClickAway(ref, () => {
    setIsActive(false);
  });

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsActive(!isActive);
    }
  };

  return (
    <li
      ref={ref}
      onClick={() => setIsActive(!isActive)}
      onKeyDown={handleKeyDown}
      style={{
        width: isActive ? `${itemMaxWidth}px` : `${itemMinWidth}px`,
      }}
      className={`horizontal-collapse__item rounded-xl ${
        isActive ? "is-active" : ""
      } ${className}`}
      tabIndex={0}
      role="button"
    >
      <div
        style={{ width: `${itemMaxWidth}px` }}
        className="horizontal-collapse__item-inner"
      >
        {children}
      </div>
    </li>
  );
};

export default HorizontalCollapseItem;
