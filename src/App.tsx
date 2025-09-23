import React, { useState, useEffect, useRef } from 'react';
import testimonialsData from './testemonials.json';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastScrollY = useRef(0);

  const handleMobileMenuToggle = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      setIsMobileMenuOpen(true);
      setIsClosing(false);
      setTimeout(() => setIsAnimating(true), 10);
    }
  };

  const closeMobileMenu = () => {
    setIsClosing(true);
    setIsAnimating(false);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

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
    benefitRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      benefitRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gaming-dark text-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gaming-dark backdrop-blur-sm" style={{
        boxShadow: '0 8px 32px rgba(26, 26, 26, 0.8), 0 4px 16px rgba(26, 26, 26, 0.4)'
      }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://rankupacademy.gg/assets/RUA-Logo-147557a47311e385321694bba7ec05e8483dde36386908d1ef3bf1d2854d1ee5.svg"
              alt="Rank Up Academy Logo"
              className="h-10 w-auto mr-3"
            />
            <span className="font-gaming text-xl font-bold text-gaming-gold">RANK UP ACADEMY</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-gaming-gold transition-colors font-gaming">Home</a>
            <a href="#about" className="text-gray-300 hover:text-gaming-gold transition-colors font-gaming">About</a>
            <a href="#services" className="text-gray-300 hover:text-gaming-gold transition-colors font-gaming">Services</a>
            <a href="#testimonials" className="text-gray-300 hover:text-gaming-gold transition-colors font-gaming">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-gaming-gold transition-colors font-gaming">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://rankupacademy.gg/users/sign_in" className="md-show-desktop bg-white border-2 border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 no-underline font-gaming">
              Log In
            </a>
            <a href="https://rankupacademy.gg/users/sign_up" className="md-show-desktop bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 gaming-glow no-underline font-gaming">
              Get Started
            </a>

            {/* Mobile menu button */}
            <button
              className="md-hidden-mobile bg-gaming-gold text-gaming-dark p-2 rounded-lg"
              onClick={handleMobileMenuToggle}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 z-60 ${
            isClosing
              ? 'mobile-menu-exit-active'
              : isAnimating
                ? 'mobile-menu-enter-active'
                : 'mobile-menu-enter'
          }`}
          style={{ backgroundColor: 'rgb(26, 31, 58)' }}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 bg-gaming-gold text-gaming-dark p-2 rounded-lg z-50"
            onClick={closeMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
            <div className="flex flex-col space-y-4">
              <a href="https://rankupacademy.gg/users/sign_up" className="bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 gaming-glow text-center no-underline font-gaming" onClick={closeMobileMenu}>
                Get Started
              </a>
              <a href="https://rankupacademy.gg/users/sign_in" className="bg-white border-2 border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center no-underline font-gaming" onClick={closeMobileMenu}>
                Log In
              </a>
            </div>

            <a href="#home" className="text-2xl text-gray-300 hover:text-gaming-gold transition-colors font-gaming" onClick={closeMobileMenu}>
              Home
            </a>
            <a href="#about" className="text-2xl text-gray-300 hover:text-gaming-gold transition-colors font-gaming" onClick={closeMobileMenu}>
              About
            </a>
            <a href="#services" className="text-2xl text-gray-300 hover:text-gaming-gold transition-colors font-gaming" onClick={closeMobileMenu}>
              Services
            </a>
            <a href="#testimonials" className="text-2xl text-gray-300 hover:text-gaming-gold transition-colors font-gaming" onClick={closeMobileMenu}>
              Testimonials
            </a>
            <a href="#contact" className="text-2xl text-gray-300 hover:text-gaming-gold transition-colors font-gaming" onClick={closeMobileMenu}>
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden hero-mobile-container">
        {/* Hero Background Image */}
        <div
          className="hero-image-mobile hero-bg-image"
          style={{
            backgroundImage: 'url(/assets/square_tracer-hero-image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Dark overlay for text readability - only on desktop */}
          <div className="absolute inset-0 hidden md:block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
        </div>

        {/* Hero Content */}
        <div className="hero-content-mobile" style={{ paddingTop: '10rem' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl relative">
              {/* Hero content wrapper that moves with the geometric box */}
              <div className="hero-text-wrapper">
                {/* Stylish geometric background with content inside */}
                <div
                  className="geometric-box"
                  style={{
                    background: 'linear-gradient(135deg, rgba(252, 211, 5, 0.15), rgba(252, 211, 5, 0.05))',
                    borderRadius: '20px',
                    border: '2px solid rgba(252, 211, 5, 0.3)',
                    backdropFilter: 'blur(10px)',
                    padding: '3rem 2rem',
                    margin: '1rem',
                    maxWidth: '35rem'
                  }}
                >
                  {/* Hero Text Content */}
                  {/* Line 1: FROM GETTING CARRIED */}
                  <div className="mb-4">
                    <span className="font-gaming text-4xl md:text-5xl lg:text-6xl font-bold text-gaming-gold">
                      FROM GETTING CARRIED
                    </span>
                  </div>

                  {/* Line 2: TO BEING THE CARRY */}
                  <div className="mb-6">
                    <span className="font-gaming text-4xl md:text-5xl lg:text-6xl font-bold text-gaming-gold">
                      TO BEING{' '}
                    </span>
                    <span className="font-gaming text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500">
                      THE CARRY
                    </span>
                  </div>

                  {/* Line 3: WE WILL TEACH YOU HOW TO RANK UP */}
                  <div className="mb-8">
                    <p className="font-gaming text-gaming-gold" style={{ fontSize: '1.25rem', fontWeight: '100' }}>
                      WE WILL TEACH YOU HOW TO RANK UP
                    </p>
                  </div>

                  {/* Line 4: Button and Limited Slots */}
                  <div className="flex items-center gap-6">
                    {/* Column 1: START NOW Button */}
                    <a href="https://rankupacademy.gg/users/sign_up" className="bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 gaming-glow text-lg font-gaming no-underline">
                      START NOW
                    </a>

                    {/* Column 2: LIMITED SLOTS AVAILABLE */}
                    <div className="rounded-lg" style={{
                      border: '1px solid #FCD305',
                      marginLeft: '1rem',
                      paddingLeft: '1rem',
                      paddingRight: '1rem',
                      paddingTop: '0.25rem',
                      paddingBottom: '0.25rem'
                    }}>
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

      {/* Rank Up Academy Branding Section */}
      <section style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#1A1A1A",
        padding: "48px 0"
      }}>
        {/* Left Line */}
        <div style={{
          flex: 1,
          height: "2px",
          background: "linear-gradient(to right, transparent 0%, rgba(252, 211, 5, 0.8) 50%, transparent 100%)"
        }}></div>

        {/* Center Text */}
        <div style={{
          textAlign: "center",
          margin: "0 40px",
          color: "#FCD305"
        }}>
          <h2 className="font-gaming" style={{
            fontSize: "2rem",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "8px",
            textShadow: "0 0 20px rgba(252, 211, 5, 0.5)"
          }}>
            RANK UP ACADEMY
          </h2>
          <p style={{
            fontSize: "0.875rem",
            fontWeight: "600",
            color: "#FCD305",
            letterSpacing: "3px",
            opacity: "0.9"
          }}>
            WHERE YOUR IMPROVEMENT BEGINS
          </p>
        </div>

        {/* Right Line */}
        <div style={{
          flex: 1,
          height: "2px",
          background: "linear-gradient(to right, transparent 0%, rgba(252, 211, 5, 0.8) 50%, transparent 100%)"
        }}></div>
      </section>

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
      <section style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#1A1A1A",
        padding: "48px 0"
      }}>
        {/* Left Line */}
        <div style={{
          flex: 1,
          height: "2px",
          background: "linear-gradient(to right, transparent 0%, rgba(252, 211, 5, 0.8) 50%, transparent 100%)"
        }}></div>

        {/* Center Text */}
        <div style={{
          textAlign: "center",
          margin: "0 40px",
          color: "#FCD305"
        }}>
          <h2 className="font-gaming" style={{
            fontSize: "2rem",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "0",
            textShadow: "0 0 20px rgba(252, 211, 5, 0.5)"
          }}>
            TESTIMONIALS
          </h2>
        </div>

        {/* Right Line */}
        <div style={{
          flex: 1,
          height: "2px",
          background: "linear-gradient(to right, transparent 0%, rgba(252, 211, 5, 0.8) 50%, transparent 100%)"
        }}></div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gaming-dark">
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
    </div>
  );
}

export default App;