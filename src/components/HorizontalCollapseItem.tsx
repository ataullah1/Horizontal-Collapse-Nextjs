"use client";

import React from "react";

interface HorizontalCollapseItemProps {
  className?: string;
  children: React.ReactNode;
  isActive: boolean; // Receive the active state
  onClick: () => void; // Receive the click handler
}

const HorizontalCollapseItem: React.FC<HorizontalCollapseItemProps> = ({
  className,
  children,
  isActive,
  onClick,
}) => {
  const itemMinWidth = 100;
  const itemMaxWidth = 500;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick(); // Toggle the active state on keyboard interaction
    }
  };

  return (
    <div
      onClick={onClick} // Only toggles on click inside the item
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
        className="horizontal-collapse__item-inner p-5 z-20"
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalCollapseItem;
