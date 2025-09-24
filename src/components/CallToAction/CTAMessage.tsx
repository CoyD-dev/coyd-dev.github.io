import React from 'react';
import styles from './CallToAction.module.css';

export function CTAMessage() {
  return (
    <div className={styles.ctaMessageContainer}>
      <p className={`font-gaming ${styles.ctaMessageText}`}>
        NUMBERS ARE LIMITED, SECURE YOUR
      </p>
      <p className={`font-gaming ${styles.ctaMessageText}`}>
        SPOT AT THIS LOCKED-IN PRICE FAST.
      </p>
    </div>
  );
}