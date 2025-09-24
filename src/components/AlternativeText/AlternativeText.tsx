import React from 'react';
import { AlternativeMessage } from './AlternativeMessage';

export function AlternativeText() {
  return (
    <section style={{
      backgroundColor: "#1a1a1a",
      padding: "2rem 2rem 3rem 2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "100%",
      boxSizing: "border-box"
    }}>
      <div style={{
        maxWidth: "1200px",
        width: "100%"
      }}>
        <AlternativeMessage />
      </div>
    </section>
  );
}