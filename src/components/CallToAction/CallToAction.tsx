import React from 'react';
import { CTAButton } from './CTAButton';
import { CTAMessage } from './CTAMessage';
import styles from './CallToAction.module.css';

export function CallToAction() {
  return (
    <section className={styles.callToActionSection}>
      <CTAButton />
      <CTAMessage />
    </section>
  );
}