import React from 'react';
import { FAQQuestion } from './FAQQuestion';
import { FAQAnswer } from './FAQAnswer';
import { FAQItem as FAQItemData } from './faqData';
import styles from './FAQ.module.css';

interface FAQItemProps {
  faq: FAQItemData;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ faq, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className={styles.faqItem}>
      <FAQQuestion
        question={faq.question}
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && <FAQAnswer answer={faq.answer} />}
    </div>
  );
}