import React from 'react';

interface PricingFeatureItemProps {
  feature: string;
}

export function PricingFeatureItem({ feature }: PricingFeatureItemProps) {
  return (
    <li className="pricing-list-item">
      <span className="pricing-list-bullet">•</span>
      {feature}
    </li>
  );
}