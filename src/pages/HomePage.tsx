import React from 'react';
import { BrandedSectionTitle } from '../components/Shared';
import { Hero } from '../components/Hero';
import { VideoIntro } from '../components/VideoIntro';
import { Benefits } from '../components/Benefits';
import { Testimonials } from '../components/Testimonials';
import { Choice } from '../components/Choice';
import { CallToAction } from '../components/CallToAction';
import { AlternativeText } from '../components/AlternativeText';
import { FAQ } from '../components/FAQ';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      {/* Rank Up Academy Branding Section */}
      <BrandedSectionTitle
        id="about"
        title="RANK UP ACADEMY"
        subtitle="WHERE YOUR IMPROVEMENT BEGINS"
        className="brandingSection"
      />

      <VideoIntro />

      <Benefits />

      <BrandedSectionTitle
        id="testimonials"
        title="TESTIMONIALS"
      />

      <Testimonials />

      <BrandedSectionTitle
        title="IT IS YOUR CHOICE"
        subtitle="INSTEAD OF HITTING QUEUE AGAIN, ACT TO IMPROVE"
        titleStyle={{ marginBottom: "8px" }}
        subtitleStyle={{
          fontSize: "0.875rem",
          fontWeight: "600",
          letterSpacing: "3px",
          opacity: "0.9"
        }}
      />

      <Choice />

      <CallToAction />

      <AlternativeText />

      <FAQ />
    </>
  );
};

export default HomePage;