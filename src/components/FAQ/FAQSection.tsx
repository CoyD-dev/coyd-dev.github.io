import React from 'react';
import { FAQItem as FAQItemComponent } from './FAQItem';
import { FAQItem } from './faqData';
import styles from './FAQ.module.css';

interface FAQSectionProps {
  faqData: FAQItem[];
  openAccordionIndices: number[];
  toggleAccordion: (index: number) => void;
}

export function FAQSection({ faqData, openAccordionIndices, toggleAccordion }: FAQSectionProps) {
  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.faqContainer}>
        {faqData.map((faq, index) => (
          <FAQItemComponent
            key={index}
            faq={faq}
            index={index}
            isOpen={openAccordionIndices.includes(index)}
            onToggle={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </section>
  );
}