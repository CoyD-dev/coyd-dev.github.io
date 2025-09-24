import React from 'react';
import styles from './CallToAction.module.css';

export function CTAButton() {
  return (
    <a
      href="https://rankupacademy.gg/users/sign_up"
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 transition-all duration-300 transform hover:scale-105 gaming-glow text-lg font-gaming no-underline ${styles.ctaButton}`}
    >
      JOIN RANK UP ACADEMY
    </a>
  );
}