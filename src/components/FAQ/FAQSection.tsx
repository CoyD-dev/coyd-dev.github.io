import React from 'react';
import { FAQItem as FAQItemComponent } from './FAQItem';
import { FAQItem } from './faqData';

interface FAQSectionProps {
  faqData: FAQItem[];
  openAccordionIndices: number[];
  toggleAccordion: (index: number) => void;
}

export function FAQSection({ faqData, openAccordionIndices, toggleAccordion }: FAQSectionProps) {
  return (
    <section id="faq" style={{
      backgroundColor: "#1a1a1a",
      padding: "0 2rem 1rem 2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      boxSizing: "border-box"
    }}>
      <div style={{
        maxWidth: "800px",
        width: "100%"
      }}>
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