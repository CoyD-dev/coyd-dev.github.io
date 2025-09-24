import React from 'react';

interface FAQAnswerProps {
  answer: string;
}

export function FAQAnswer({ answer }: FAQAnswerProps) {
  return (
    <div style={{
      padding: "2rem 1.5rem",
      backgroundColor: "#1a1a1a",
      animation: "fadeIn 0.3s ease-in-out"
    }}>
      <p style={{
        color: "#ffffff",
        fontSize: "1rem",
        lineHeight: "1.6",
        margin: "0",
        fontWeight: "400"
      }}>
        {answer}
      </p>
    </div>
  );
}