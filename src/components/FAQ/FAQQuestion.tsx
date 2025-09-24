import React from 'react';
import { FAQIcon } from './FAQIcon';

interface FAQQuestionProps {
  question: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQQuestion({ question, isOpen, onToggle }: FAQQuestionProps) {
  return (
    <div
      style={{
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        backgroundColor: "#313338",
        borderTop: "3px solid #313338",
        borderBottom: "3px solid #313338",
        transition: "background-color 0.3s ease",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#404040"}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#313338"}
      onClick={onToggle}
    >
      <div
        style={{
          width: "100%",
          padding: "1.5rem 2rem",
          display: "flex",
          alignItems: "center",
          maxWidth: "800px",
          margin: "0 auto"
        }}
      >
        <FAQIcon isOpen={isOpen} />
        <span className="font-gaming" style={{
          color: "#ffffff",
          fontSize: "1.1rem",
          fontWeight: "bold",
          textAlign: "left",
          letterSpacing: "1px"
        }}>
          {question}
        </span>
      </div>
    </div>
  );
}