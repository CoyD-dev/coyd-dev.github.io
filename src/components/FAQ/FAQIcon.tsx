import React from 'react';
import styles from './FAQ.module.css';

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
      className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`}
    >
      <polygon
        points="9,6 18,12 9,18"
        fill="#ffffff"
      />
    </svg>
  );
}