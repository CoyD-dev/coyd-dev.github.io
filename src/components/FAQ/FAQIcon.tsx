import React from 'react';

interface FAQIconProps {
  isOpen: boolean;
}

export function FAQIcon({ isOpen }: FAQIconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease",
        marginRight: "1rem",
        flexShrink: 0
      }}
    >
      <polygon
        points="9,6 18,12 9,18"
        fill="#ffffff"
      />
    </svg>
  );
}