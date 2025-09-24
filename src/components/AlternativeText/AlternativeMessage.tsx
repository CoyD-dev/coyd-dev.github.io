import React from 'react';
import styles from './AlternativeText.module.css';

export function AlternativeMessage() {
  return (
    <>
      <p className={`font-gaming ${styles.alternativeMessagePrimary}`}>
        OR CONTINUE WASTING HUNDREDS OF HOURS GRINDING
      </p>
      <p className={`font-gaming ${styles.alternativeMessageSecondary}`}>
        WITHOUT PROGRESS
      </p>
    </>
  );
}