import React, { useState } from 'react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  return (
    <div className="min-h-screen bg-gaming-dark text-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-95 backdrop-blur-sm border-b border-gaming-gold border-opacity-20">
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
            <a href="/sign_in" className="md-show-desktop bg-white border-2 border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 no-underline font-gaming">
              Log In
            </a>
            <a href="/sign_up" className="md-show-desktop bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 gaming-glow no-underline font-gaming">
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
              <a href="/sign_up" className="bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 gaming-glow text-center no-underline font-gaming" onClick={closeMobileMenu}>
                Get Started
              </a>
              <a href="/sign_in" className="bg-white border-2 border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center no-underline font-gaming" onClick={closeMobileMenu}>
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
      <section className="relative min-h-screen overflow-hidden">
        {/* Hero Background Image */}
        <div
          className="absolute hero-bg-image"
          style={{
            backgroundImage: 'url(/assets/square_tracer-hero-image.jpg)'
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10" style={{ paddingTop: '10rem' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
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
              <button className="bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 gaming-glow text-lg font-gaming">
                START NOW
              </button>

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

        {/* Bottom Gradient Blur */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gaming-dark via-gaming-dark/80 to-transparent"></div>

        {/* Bottom Branding Section */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center">
              {/* Left Line */}
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gaming-gold"></div>

              {/* Center Text */}
              <div className="px-8 text-center">
                <h2 className="font-gaming text-2xl md:text-3xl font-bold text-gaming-gold mb-1">
                  RANK UP ACADEMY
                </h2>
                <p className="text-white text-sm font-medium">
                  WHERE YOUR IMPROVEMENT BEGINS
                </p>
              </div>

              {/* Right Line */}
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gaming-gold"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-gradient-to-b from-gaming-dark to-gaming-blue">
        <div className="container mx-auto px-4">
          <h2 className="font-gaming text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Why Choose <span className="text-gaming-gold text-glow">Rank Up Academy</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: '⏰', title: 'TIME', desc: 'Efficient coaching that respects your schedule' },
              { icon: '🚀', title: 'POTENTIAL', desc: 'Unlock your true gaming potential with personalized strategies' },
              { icon: '🧠', title: 'MINDSET', desc: 'Develop the champion mindset and game sense' },
              { icon: '🎮', title: 'ACCESS', desc: 'Direct access to professional coaching and exclusive content' },
              { icon: '👥', title: 'COMMUNITY', desc: 'Join a community of dedicated Overwatch 2 players' }
            ].map((prop, index) => (
              <div
                key={prop.title}
                className="card text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4">{prop.icon}</div>
                <h3 className="font-gaming text-2xl font-bold text-gaming-gold mb-4">{prop.title}</h3>
                <p className="text-gray-300">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-gradient-to-b from-gaming-blue to-gaming-dark">
        <div className="container mx-auto px-4">
          <h2 className="font-gaming text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            <span className="text-gaming-gold text-glow">Success Stories</span> & Training Content
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Tracer Positioning Masterclass', hero: 'Tracer', rank: 'GM → Top 500' },
              { title: 'Ana Sleep Dart Predictions', hero: 'Ana', rank: 'Diamond → Master' },
              { title: 'Reinhardt Mind Games', hero: 'Reinhardt', rank: 'Plat → Diamond' },
              { title: 'Genji Blade Timing', hero: 'Genji', rank: 'Gold → Plat' }
            ].map((video, index) => (
              <div
                key={index}
                className="card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-48 bg-gradient-to-br from-gaming-gold to-primary-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark to-gaming-blue opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gaming-gold rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gaming-dark ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-gaming-gold text-gaming-dark px-3 py-1 rounded-full text-sm font-bold">
                    {video.hero}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-gaming text-lg font-bold text-white mb-2">{video.title}</h3>
                  <span className="text-gaming-gold font-medium text-sm">{video.rank}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-gaming-dark to-gaming-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-gaming text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="text-gaming-gold text-glow">RANK UP</span>?
          </h2>

          {/* Pricing Card */}
          <div className="max-w-lg mx-auto mb-16">
            <div className="bg-gaming-blue bg-opacity-80 p-8 rounded-2xl border-2 border-gaming-gold gaming-glow">
              <h3 className="font-gaming text-2xl font-bold text-gaming-gold mb-4">MONTHLY COACHING</h3>

              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$75</span>
                <span className="text-gray-400 text-lg">/month</span>
              </div>

              <ul className="text-left space-y-3 mb-8">
                {[
                  'Personalized monthly VOD reviews',
                  'Step-by-step improvement guides',
                  'Access to Top 500 coaches',
                  'Community of dedicated players',
                  'All ranks supported (Bronze to Top 500)',
                  'Console and PC gameplay analysis'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-gaming-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg font-gaming">
                START YOUR JOURNEY NOW
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { number: '2,500+', label: 'Students Coached', icon: '👥' },
              { number: '94%', label: 'Rank Improvement', icon: '📈' },
              { number: '4.9/5', label: 'Student Rating', icon: '⭐' }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-gaming-blue bg-opacity-40 rounded-xl">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="font-gaming text-3xl font-bold text-gaming-gold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gaming-dark border-t border-gaming-gold border-opacity-20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-gaming text-2xl font-bold text-gaming-gold mb-4">RANK UP ACADEMY</h3>
          <p className="text-gray-400 mb-6">
            Professional Overwatch 2 Coaching • Top 500 Instructors • Worldwide Access
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Rank Up Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
