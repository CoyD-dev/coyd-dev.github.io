import React from 'react';
import { CTAButton } from './CTAButton';
import { CTAMessage } from './CTAMessage';

export function CallToAction() {
  return (
    <section style={{
      backgroundColor: "#1a1a1a",
      padding: "3rem 0 1rem 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }}>
      <CTAButton />
      <CTAMessage />
    </section>
  );
}