import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className={`relative min-h-screen overflow-hidden ${styles.heroMobileContainer}`}>
      {/* Hero Background Image */}
      <div
        className={`${styles.heroImageMobile} ${styles.heroBgImage}`}
        style={{
          backgroundImage: 'url(/assets/square_tracer-hero-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%'
        }}
      >
        {/* Dark overlay for text readability - only on desktop */}
        <div className={`absolute inset-0 hidden md:block ${styles.heroBgOverlay}`}></div>
      </div>

      {/* Hero Content */}
      <div className={`${styles.heroContentMobile} ${styles.heroContentPadding}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl relative">
            {/* Hero content wrapper that moves with the geometric box */}
            <div className={styles.heroTextWrapper}>
              {/* Stylish geometric background with content inside */}
              <div className={`geometric-box ${styles.heroGeometricBox}`}>
                {/* Hero Text Content */}
                {/* Line 1: FROM GETTING CARRIED */}
                <div className="mb-4">
                  <span className={`font-gaming ${styles.heroMainTitle} font-bold text-gaming-gold`}>
                    FROM GETTING CARRIED
                  </span>
                </div>

                {/* Line 2: TO BEING THE CARRY */}
                <div className="mb-6">
                  <span className={`font-gaming ${styles.heroMainTitle} font-bold text-gaming-gold`}>
                    TO BEING{' '}
                  </span>
                  <span className={`font-gaming ${styles.heroMainTitle} font-bold text-orange-500`}>
                    THE CARRY
                  </span>
                </div>

                {/* Line 3: WE WILL TEACH YOU HOW TO RANK UP */}
                <div className="mb-8">
                  <p className={`font-gaming text-gaming-gold ${styles.heroSubtitle}`}>
                    WE WILL TEACH YOU HOW TO RANK UP
                  </p>
                </div>

                {/* Line 4: Button and Limited Slots */}
                <div className="flex items-center gap-6">
                  {/* Column 1: START NOW Button */}
                  <a
                    href="https://rankupacademy.gg/users/sign_up"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 gaming-glow text-lg font-gaming no-underline"
                  >
                    START NOW
                  </a>

                  {/* Column 2: LIMITED SLOTS AVAILABLE */}
                  <div className={`rounded-lg ${styles.heroLimitedSlotsBox}`}>
                    <span className="text-gaming-gold font-bold text-lg font-gaming">
                      LIMITED SLOTS AVAILABLE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Blur */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gaming-dark via-gaming-dark/80 to-transparent"></div>
    </section>
  );
};

export default Hero;