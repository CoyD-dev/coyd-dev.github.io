import React from 'react';
import styles from './FAQ.module.css';

interface FAQAnswerProps {
  answer: string;
}

export function FAQAnswer({ answer }: FAQAnswerProps) {
  return (
    <div className={styles.faqAnswer}>
      <p className={styles.faqAnswerText}>
        {answer}
      </p>
    </div>
  );
}