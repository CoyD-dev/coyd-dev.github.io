import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const [isRedirecting, setIsRedirecting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check for redirect on homepage only
    if (location.pathname === '/') {
      const redirectPath = sessionStorage.getItem('redirectPath');
      if (redirectPath && redirectPath !== '/') {
        setIsRedirecting(true);
        // Short timeout to allow RedirectHandler to work
        const timeout = setTimeout(() => {
          setIsRedirecting(false);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [location.pathname]);

  if (isRedirecting) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gaming-gold mx-auto mb-4"></div>
          <p className="text-gaming-gold font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

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