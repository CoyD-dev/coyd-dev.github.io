import React, { useState, useEffect, useRef } from 'react';
import testimonialsData from './testemonials.json';
import { BrandedSectionTitle } from './components/Shared';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';

function App() {
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [openAccordionIndices, setOpenAccordionIndices] = useState<number[]>([0]);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastScrollY = useRef(0);


  const openImageViewer = (imageUrl: string) => {
    const index = testimonialsData.indexOf(imageUrl);
    setSelectedImageIndex(index);
  };

  const closeImageViewer = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;

    let newIndex;
    if (direction === 'prev') {
      newIndex = selectedImageIndex === 0 ? testimonialsData.length - 1 : selectedImageIndex - 1;
    } else {
      newIndex = selectedImageIndex === testimonialsData.length - 1 ? 0 : selectedImageIndex + 1;
    }
    setSelectedImageIndex(newIndex);
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordionIndices(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };


  const faqData = [
    {
      question: "AM I GUARANTEED TO RANK UP?",
      answer: "ACHIEVING A HIGHER RANK DEPENDS ON YOUR COMMITMENT. IF YOU IMPLEMENT OUR FEEDBACK, PUT IN THE EFFORT, AND TAKE RESPONSIBILITY FOR YOUR PROGRESS, YOU WILL RANK UP. IT'S AKIN TO ASKING A GYM FOR A GUARANTEE ON A 6-PACK. SHOW UP, FOLLOW THE GUIDANCE, AND TRAIN HARD FOR VISIBLE RESULTS."
    },
    {
      question: "I'M IN X COUNTRY, CAN I JOIN?",
      answer: "OF COURSE! RANK UP ACADEMY IS ACCESSIBLE TO ANYONE WORLDWIDE. WHILE CLASSES ARE CONDUCTED IN REAL-TIME, ALL SESSIONS ARE RECORDED, ALLOWING YOU TO WATCH AT YOUR CONVENIENCE."
    },
    {
      question: "IS IT SUITABLE FOR X RANK?",
      answer: "YES. RANK UP ACADEMY CATERS TO PLAYERS ACROSS ALL RANKS, FROM BRONZE 5 TO TOP 500. OUR TEACHINGS ARE FOCUSED ON FUNDAMENTALS COMBINED WITH CUSTOMIZED FEEDBACK FOR EACH INDIVIDUAL, ENSURING MAXIMUM PROGRESS FOR EVERYONE."
    },
    {
      question: "I'M ON CONSOLE, CAN I JOIN?",
      answer: "ABSOLUTELY. ALL PLATFORMS ARE WELCOME AT RANK UP ACADEMY."
    },
    {
      question: "I DON'T HAVE TIME, IS IT WORTH IT?",
      answer: "DEFINITELY. RANK UP ACADEMY MAXIMIZES THE VALUE YOU GET FROM EVERY HOUR INVESTED. QUALITY IMPROVEMENT WITH LIMITED TIME IS FAR BETTER THAN MINDLESSLY GRINDING WITH AN EXCESS OF TIME."
    },
    {
      question: "I PLAY X HERO, CAN YOU TEACH ME?",
      answer: "WITHOUT A DOUBT. RANK UP ACADEMY COVERS SIMPLE AND PRACTICAL FUNDAMENTALS FOR EVERY HERO."
    }
  ];


  // Intersection Observer for scroll animations
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const isScrollingUp = currentScrollY < lastScrollY.current;
          lastScrollY.current = currentScrollY;

          if (isScrollingUp) {
            // Check each benefit item to see if it should animate out
            benefitRefs.current.forEach((ref) => {
              if (ref) {
                const rect = ref.getBoundingClientRect();
                // Convert 15rem to pixels (assuming 1rem = 16px)
                const fadeOutThreshold = 15 * 16; // 240px
                const isApproachingHidden = rect.top > (window.innerHeight - fadeOutThreshold);

                if (isApproachingHidden && ref.classList.contains('benefits-animate-in')) {
                  ref.classList.remove('benefits-animate-in');
                  ref.classList.add('benefits-animate-out');
                }
              }
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('benefits-animate-in');
            target.classList.remove('benefits-animate-out');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Add scroll listener for reverse animations
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Observe all benefit items
    const currentRefs = benefitRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gaming-dark text-white">

      <Navigation />

      <Hero />

      {/* Rank Up Academy Branding Section */}
      <BrandedSectionTitle
        id="about"
        title="RANK UP ACADEMY"
        subtitle="WHERE YOUR IMPROVEMENT BEGINS"
        className="brandingSection"
      />

      {/* Video and Introduction Section */}
      <section className="bg-gaming-dark video-section-padding">
        <div className="container mx-auto px-4">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center"
          }} className="video-section-grid">
            {/* Left Side - Video Player */}
            <div className="relative">
              <video
                id="customVideo"
                className="w-full rounded-lg"
                style={{
                  backgroundColor: "#000",
                  maxHeight: "400px"
                }}
                onClick={() => {
                  const video = document.getElementById('customVideo') as HTMLVideoElement;
                  const overlay = document.getElementById('videoOverlay');
                  if (video.paused) {
                    video.play();
                    video.controls = true;
                    if (overlay) overlay.style.display = 'none';
                  } else {
                    video.pause();
                    video.controls = false;
                    if (overlay) overlay.style.display = 'flex';
                  }
                }}
              >
                <source src="https://rankupacademy.gg/assets/RUA_Trailer_V2-a98634f6b41a79631adbe15ed50fc57154a8f8460f0b11190b652ee1f1c37871.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Play Button Overlay */}
              <div
                id="videoOverlay"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  cursor: "pointer",
                  borderRadius: "8px"
                }}
                onClick={() => {
                  const video = document.getElementById('customVideo') as HTMLVideoElement;
                  const overlay = document.getElementById('videoOverlay');
                  video.play();
                  video.controls = true;
                  if (overlay) overlay.style.display = 'none';
                }}
              >
                <button
                  style={{
                    backgroundColor: "#FCD305",
                    color: "#000",
                    border: "none",
                    borderRadius: "24px",
                    padding: "12px 24px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(252, 211, 5, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                  className="font-gaming"
                >
                  <span style={{
                    width: "0",
                    height: "0",
                    borderLeft: "8px solid #000",
                    borderTop: "5px solid transparent",
                    borderBottom: "5px solid transparent"
                  }}></span>
                  PREVIEW
                </button>
              </div>
            </div>

            {/* Right Side - Boxed Text */}
            <div style={{
              backgroundColor: "rgba(245, 245, 245, 0.8)",
              border: "1px solid rgba(252, 211, 5, 0.3)",
              borderRadius: "12px",
              padding: "2rem",
              backdropFilter: "blur(10px)"
            }}>
              <p className="text-black text-lg leading-relaxed font-medium" style={{ textTransform: "uppercase" }}>
                <span className="font-bold">Your rank is not held hostage by your teammates anymore.</span>
                <br />
                Picture this: What if Top Players could guide you step-by-step, revealing <span className="font-bold">EXACTLY</span> what you need to do to <span className="font-bold" style={{ color: "#FC4F05" }}>dominate your games</span>?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gaming-dark benefits-section-container">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            {/* Golden Vertical Line */}
            <div id="benefits-vertical-line" style={{
              position: "absolute",
              left: "38px",
              top: "0",
              bottom: "0",
              width: "4px",
              backgroundColor: "#FCD305"
            }}></div>

            {/* Benefits List */}
            <div style={{ paddingTop: "2rem" }}>
              {/* Benefit 1: Time */}
              <div
                ref={(el) => { benefitRefs.current[0] = el; }}
                className="flex items-start benefit-item benefits-scroll-animation benefits-slide-from-right"
              >
                {/* Circle Bullet */}
                <div className="benefit-circle" style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "50%",
                  flexShrink: "0",
                  zIndex: "10",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <img
                    src="https://rankupacademy.gg/assets/clock-008571e5616a2d242587b0511825a0af4470159dece49abf6eb627c4a4357fcb.svg"
                    alt="Clock icon"
                    style={{
                      width: "40px",
                      height: "40px",
                      filter: "brightness(0) saturate(100%) invert(16%) sepia(10%) saturate(447%) hue-rotate(177deg) brightness(95%) contrast(93%)"
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ marginLeft: "2rem" }}>
                  <h3 className="font-gaming font-bold text-white benefit-title uppercase tracking-wider">
                    TIME
                  </h3>
                  <p className="text-gray-300 text-xl leading-relaxed max-w-4xl">
                    How many hours have you poured into the game without seeing the results you want? Break free from the cycle of stagnation and make every session count.
                  </p>
                </div>
              </div>

              {/* Benefit 2: Potential */}
              <div
                ref={(el) => { benefitRefs.current[1] = el; }}
                className="flex items-start benefit-item benefits-scroll-animation benefits-slide-from-left"
              >
                {/* Circle Bullet */}
                <div className="benefit-circle" style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "50%",
                  flexShrink: "0",
                  zIndex: "10",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <img
                    src="https://rankupacademy.gg/assets/rocket-72815354ca136c3dec81c3193c0362b5afa50f4c387a3a652ff76be8a102d599.svg"
                    alt="Rocket icon"
                    style={{
                      width: "40px",
                      height: "40px",
                      filter: "brightness(0) saturate(100%) invert(16%) sepia(10%) saturate(447%) hue-rotate(177deg) brightness(95%) contrast(93%)"
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ marginLeft: "2rem" }}>
                  <h3 className="font-gaming font-bold text-white benefit-title uppercase tracking-wider">
                    POTENTIAL
                  </h3>
                  <p className="text-gray-300 text-xl leading-relaxed max-w-4xl">
                    Discover what's holding you back with personalized reviews from our top-ranked specialists. We don't just tell you what to improve; we guide you step-by-step on the path to success.
                  </p>
                </div>
              </div>

              {/* Benefit 3: Mindset */}
              <div
                ref={(el) => { benefitRefs.current[2] = el; }}
                className="flex items-start benefit-item benefits-scroll-animation benefits-slide-from-right"
              >
                {/* Circle Bullet */}
                <div className="benefit-circle" style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "50%",
                  flexShrink: "0",
                  zIndex: "10",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <img
                    src="https://rankupacademy.gg/assets/brain-b02a81b71c56197446386d01155e71e2ca8dc12b390cbb2517ebab578f721198.svg"
                    alt="Brain icon"
                    style={{
                      width: "40px",
                      height: "40px"
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ marginLeft: "2rem", paddingTop: "0.5rem" }}>
                  <h3 className="font-gaming font-bold text-white benefit-title uppercase tracking-wider">
                    MINDSET
                  </h3>
                  <ul className="text-gray-300 text-xl leading-relaxed max-w-4xl space-y-3">
                    <li className="flex items-center">
                      <span className="mr-3 text-2xl">•</span>
                      Engage with Specialists and learn how they think and execute
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 text-2xl">•</span>
                      Witness noticeable improvement as fast as possible
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 text-2xl">•</span>
                      Master the simple fundamentals that set the best apart
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefit 4: Access */}
              <div
                ref={(el) => { benefitRefs.current[3] = el; }}
                className="flex items-start benefit-item benefits-scroll-animation benefits-slide-from-left"
              >
                {/* Circle Bullet */}
                <div className="benefit-circle" style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "50%",
                  flexShrink: "0",
                  zIndex: "10",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <img
                    src="https://rankupacademy.gg/assets/instructor-654cdaaf9027644d5c47c7b4d058a67979d923d57d03c2a7a9b194ed626af84b.svg"
                    alt="Instructor icon"
                    style={{
                      width: "40px",
                      height: "40px",
                      filter: "brightness(0) saturate(100%) invert(16%) sepia(10%) saturate(447%) hue-rotate(177deg) brightness(95%) contrast(93%)"
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ marginLeft: "2rem", paddingTop: "0.5rem" }}>
                  <h3 className="font-gaming font-bold text-white benefit-title uppercase tracking-wider">
                    ACCESS
                  </h3>
                  <ul className="text-gray-300 text-xl leading-relaxed max-w-4xl space-y-3">
                    <li className="flex items-center">
                      <span className="mr-3 text-2xl">•</span>
                      Connect with Specialists who, like you, started from the bottom and are now among the highest ranks
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 text-2xl">•</span>
                      Receive tailored feedback at every step of your journey
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 text-2xl">•</span>
                      Engage in conversation with the 0.01% of players
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefit 5: Community */}
              <div
                ref={(el) => { benefitRefs.current[4] = el; }}
                className="flex items-start benefit-item benefits-scroll-animation benefits-slide-from-right"
              >
                {/* Circle Bullet */}
                <div className="benefit-circle" style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "50%",
                  flexShrink: "0",
                  zIndex: "10",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <img
                    src="https://rankupacademy.gg/assets/community-f7e262d6759f90b85195517f4607ee40d8ae61ff34656e0eaa59beaee097df5c.svg"
                    alt="Community icon"
                    style={{
                      width: "40px",
                      height: "40px",
                      filter: "brightness(0) saturate(100%) invert(16%) sepia(10%) saturate(447%) hue-rotate(177deg) brightness(95%) contrast(93%)"
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ marginLeft: "2rem", paddingTop: "0.5rem" }}>
                  <h3 className="font-gaming font-bold text-white benefit-title uppercase tracking-wider">
                    COMMUNITY
                  </h3>
                  <ul className="text-gray-300 text-xl leading-relaxed max-w-4xl space-y-3">
                    <li className="flex items-start">
                      <span className="mr-3 text-2xl" style={{ paddingTop: "0.125rem" }}>•</span>
                      Connect with players who share your journey and understand the frustration of being stuck. Together, we elevate each other and celebrate the victories as you climb the ranks.
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 text-2xl">•</span>
                      300+ on the same page as you
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 text-2xl">•</span>
                      Play alongside others who share the passion for improvement
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 text-2xl">•</span>
                      Win both in and out of the game and celebrate your Rank Ups
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <BrandedSectionTitle
        id="testimonials"
        title="TESTIMONIALS"
      />

      {/* Gallery Section */}
      <section className="bg-gaming-dark">
        <div className="container mx-auto px-4">
          <div className="gallery-container">
            {/* Gallery Grid */}
            <div className="gallery-grid">
              {/* Generate gallery tiles from testimonials data */}
              {testimonialsData
                .slice(0, showAllGallery ? testimonialsData.length : 4)
                .map((imageUrl, index) => (
                  <div
                    key={index}
                    className="gallery-tile"
                    onClick={() => openImageViewer(imageUrl)}
                  >
                    <img
                      src={imageUrl}
                      alt={`Testimonial ${index + 1}`}
                      className="gallery-image"
                    />
                  </div>
                ))}
            </div>

            {/* Show All Button */}
            <div
              className="gallery-toggle"
              onClick={() => setShowAllGallery(!showAllGallery)}
            >
              <span>ALL</span>
              <svg
                className={`gallery-chevron ${showAllGallery ? 'rotated' : ''}`}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Choice Section */}
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

      {/* Three Column Hero Section */}
      <section id="pricing" className="pricing-section">
        <div className="pricing-grid">
          {/* Left Column - Zenyatta with fade from left */}
          <div className="pricing-column">
            <div className="pricing-bg-zenyatta">
              <div className="pricing-overlay-left"></div>
            </div>
          </div>

          {/* Center Column - Fixed width yellow box */}
          <div className="pricing-center-box">
              <div className="pricing-content">
                {/* Title */}
                <h2 className="font-gaming pricing-title">
                  $75 / MONTH
                </h2>

                {/* Bullet List */}
                <ul className="pricing-list">
                  <li className="pricing-list-item">
                    <span className="pricing-list-bullet">•</span>
                    PERSONALIZED MONTHLY VOD REVIEW
                  </li>
                  <li className="pricing-list-item">
                    <span className="pricing-list-bullet">•</span>
                    ACCESS TO SIMPLE STEP BY STEP GUIDES
                  </li>
                  <li className="pricing-list-item">
                    <span className="pricing-list-bullet">•</span>
                    JOIN A LIKE-MINDED COMMUNITY
                  </li>
                  <li className="pricing-list-item">
                    <span className="pricing-list-bullet">•</span>
                    RECEIVE TAILORED FEEDBACK
                  </li>
                  <li className="pricing-list-item">
                    <span className="pricing-list-bullet">•</span>
                    CANCEL ANYTIME, RISK-FREE
                  </li>
                  <li className="pricing-list-item">
                    <span className="pricing-list-bullet">•</span>
                    HUNDREDS OF CLASSES AVAILABLE
                  </li>
                </ul>
              </div>
          </div>

          {/* Right Column - Ana with gradient transparent to right */}
          <div className="pricing-column">
            <div className="pricing-bg-ana">
              <div className="pricing-overlay-right"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{
        backgroundColor: "#1a1a1a",
        padding: "3rem 0 1rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
        {/* Button */}
        <a href="https://rankupacademy.gg/users/sign_up" target="_blank" rel="noopener noreferrer" className="bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 transition-all duration-300 transform hover:scale-105 gaming-glow text-lg font-gaming no-underline" style={{
          marginBottom: "0.5rem",
          textTransform: "uppercase",
          letterSpacing: "1px",
          borderRadius: "5px"
        }}>
          JOIN RANK UP ACADEMY
        </a>

        {/* Text Lines */}
        <div style={{
          color: "#FCD305",
          fontWeight: "200",
          letterSpacing: "1px"
        }}>
          <p className="font-gaming" style={{
            fontSize: "0.9rem",
            margin: "0.5rem 0",
            textTransform: "uppercase"
          }}>
            NUMBERS ARE LIMITED, SECURE YOUR
          </p>
          <p className="font-gaming" style={{
            fontSize: "0.9rem",
            margin: "0.5rem 0",
            textTransform: "uppercase"
          }}>
            SPOT AT THIS LOCKED-IN PRICE FAST.
          </p>
        </div>
      </section>

      {/* Full-width Alternative Text Section */}
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
          <p className="font-gaming" style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "#FCD305",
            margin: "0",
            lineHeight: "1.2",
            letterSpacing: "1px"
          }}>
            OR CONTINUE WASTING HUNDREDS OF HOURS GRINDING
          </p>
          <p className="font-gaming" style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "#FC4F05",
            margin: "0.5rem 0 0 0",
            lineHeight: "1.2",
            letterSpacing: "1px"
          }}>
            WITHOUT PROGRESS
          </p>
        </div>
      </section>

      {/* Q&A Accordion Section */}
      <section id="faq" style={{
        backgroundColor: "#1a1a1a",
        padding: "0 2rem 1rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        boxSizing: "border-box"
      }}>
        <div style={{
          maxWidth: "800px",
          width: "100%"
        }}>

          {faqData.map((faq, index) => (
            <div key={index} style={{
              marginBottom: "1rem"
            }}>
              {/* Question Header - Full Width */}
              <div
                style={{
                  position: "relative",
                  left: "50%",
                  right: "50%",
                  marginLeft: "-50vw",
                  marginRight: "-50vw",
                  width: "100vw",
                  backgroundColor: "#313338",
                  borderTop: "3px solid #313338",
                  borderBottom: "3px solid #313338",
                  transition: "background-color 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#404040"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#313338"}
                onClick={() => toggleAccordion(index)}
              >
                <div
                  style={{
                    width: "100%",
                    padding: "1.5rem 2rem",
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto"
                  }}
                >
                  {/* Filled Triangle Icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transform: openAccordionIndices.includes(index) ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      marginRight: "1rem",
                      flexShrink: 0
                    }}
                  >
                    <polygon
                      points="9,6 18,12 9,18"
                      fill="#ffffff"
                    />
                  </svg>

                  <span className="font-gaming" style={{
                    color: "#ffffff",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    textAlign: "left",
                    letterSpacing: "1px"
                  }}>
                    {faq.question}
                  </span>
                </div>
              </div>

              {/* Answer Content */}
              {openAccordionIndices.includes(index) && (
                <div style={{
                  padding: "2rem 1.5rem",
                  backgroundColor: "#1a1a1a",
                  animation: "fadeIn 0.3s ease-in-out"
                }}>
                  <p style={{
                    color: "#ffffff",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    margin: "0",
                    fontWeight: "400"
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <Footer />

      {/* Image Viewer Modal */}
      {selectedImageIndex !== null && (
        <div className="image-viewer-overlay" onClick={closeImageViewer}>
          <div className="image-viewer-container" onClick={(e) => e.stopPropagation()}>
            <button className="image-viewer-close" onClick={closeImageViewer}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <img
              src={testimonialsData[selectedImageIndex]}
              alt="Enlarged testimonial"
              className="image-viewer-image"
            />
          </div>

          {/* Previous Arrow - Outside Modal */}
          {selectedImageIndex > 0 && (
            <button
              className="image-viewer-arrow image-viewer-arrow-left"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* Next Arrow - Outside Modal */}
          {selectedImageIndex < testimonialsData.length - 1 && (
            <button
              className="image-viewer-arrow image-viewer-arrow-right"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      )}

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

export default App;