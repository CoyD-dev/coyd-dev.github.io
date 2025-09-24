import React from 'react';
import { PricingFeatureItem } from './PricingFeatureItem';

const features = [
  "PERSONALIZED MONTHLY VOD REVIEW",
  "ACCESS TO SIMPLE STEP BY STEP GUIDES",
  "JOIN A LIKE-MINDED COMMUNITY",
  "RECEIVE TAILORED FEEDBACK",
  "CANCEL ANYTIME, RISK-FREE",
  "HUNDREDS OF CLASSES AVAILABLE"
];

export function PricingFeatures() {
  return (
    <ul className="pricing-list">
      {features.map((feature, index) => (
        <PricingFeatureItem key={index} feature={feature} />
      ))}
    </ul>
  );
}