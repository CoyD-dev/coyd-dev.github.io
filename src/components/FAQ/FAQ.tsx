import React, { useState } from 'react';
import { FAQSection } from './FAQSection';
import { faqData } from './faqData';

export function FAQ() {
  const [openAccordionIndices, setOpenAccordionIndices] = useState<number[]>([0]);

  const toggleAccordion = (index: number) => {
    setOpenAccordionIndices(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <FAQSection
      faqData={faqData}
      openAccordionIndices={openAccordionIndices}
      toggleAccordion={toggleAccordion}
    />
  );
}