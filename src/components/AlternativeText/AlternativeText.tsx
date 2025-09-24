import React from 'react';
import { AlternativeMessage } from './AlternativeMessage';
import styles from './AlternativeText.module.css';

export function AlternativeText() {
  return (
    <section className={styles.alternativeTextSection}>
      <div className={styles.alternativeTextContainer}>
        <AlternativeMessage />
      </div>
    </section>
  );
}