import React from 'react';
import { FAQIcon } from './FAQIcon';
import styles from './FAQ.module.css';

interface FAQQuestionProps {
  question: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQQuestion({ question, isOpen, onToggle }: FAQQuestionProps) {
  return (
    <div className={styles.faqQuestionContainer} onClick={onToggle}>
      <div className={styles.faqQuestionContent}>
        <FAQIcon isOpen={isOpen} />
        <span className={`font-gaming ${styles.faqQuestionText}`}>
          {question}
        </span>
      </div>
    </div>
  );
}