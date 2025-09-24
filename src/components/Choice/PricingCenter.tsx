import React from 'react';
import { PricingFeatures } from './PricingFeatures';

export function PricingCenter() {
  return (
    <div className="pricing-center-box">
      <div className="pricing-content">
        <h2 className="font-gaming pricing-title">
          $75 / MONTH
        </h2>
        <PricingFeatures />
      </div>
    </div>
  );
}