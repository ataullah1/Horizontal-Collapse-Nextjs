"use client";

import React, { useState } from "react";
import { useClickAway } from "react-use";

interface HorizontalCollapseItemProps {
  className?: string;
  children: React.ReactNode;
  defaultActive?: boolean; // Added defaultActive prop
}

const HorizontalCollapseItem: React.FC<HorizontalCollapseItemProps> = ({
  className,
  children,
  defaultActive = false, // Default to false
}) => {
  const [isActive, setIsActive] = useState(defaultActive); // Initialize state with defaultActive
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
      onClick={() => setIsActive(!isActive)}
      ref={ref}
      onKeyDown={handleKeyDown}
      style={{
        width: isActive ? `${itemMaxWidth}px` : `${itemMinWidth}px`,
      }}
      className={`horizontal-collapse__item rounded-xl z-20 ${
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
