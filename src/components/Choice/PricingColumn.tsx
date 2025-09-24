import React from 'react';

interface PricingColumnProps {
  type: 'left' | 'right';
}

export function PricingColumn({ type }: PricingColumnProps) {
  const isLeft = type === 'left';

  return (
    <div className="pricing-column">
      <div className={isLeft ? "pricing-bg-zenyatta" : "pricing-bg-ana"}>
        <div className={isLeft ? "pricing-overlay-left" : "pricing-overlay-right"}></div>
      </div>
    </div>
  );
}