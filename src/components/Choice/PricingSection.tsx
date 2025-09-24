import React from 'react';
import { PricingColumn } from './PricingColumn';
import { PricingCenter } from './PricingCenter';

export function PricingSection() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-grid">
        <PricingColumn type="left" />
        <PricingCenter />
        <PricingColumn type="right" />
      </div>
    </section>
  );
}