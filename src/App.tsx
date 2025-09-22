import React, { useState, useEffect } from 'react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMobileMenuToggle = () => {
    if (isMobileMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsMobileMenuOpen(true);
      setTimeout(() => setIsAnimating(true), 10);
    }
  };

  const closeMobileMenu = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsAnimating(false);
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
            <a href="#home" className="text-gray-300 hover:text-gaming-gold transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-gaming-gold transition-colors">About</a>
            <a href="#services" className="text-gray-300 hover:text-gaming-gold transition-colors">Services</a>
            <a href="#testimonials" className="text-gray-300 hover:text-gaming-gold transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-gaming-gold transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="/sign_in" className="md-show-desktop bg-white border-2 border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 no-underline">
              Log In
            </a>
            <a href="/sign_up" className="md-show-desktop bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 gaming-glow no-underline">
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
          className={`md:hidden fixed inset-0 z-60 ${isAnimating ? 'mobile-menu-enter-active' : 'mobile-menu-enter'}`}
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
              <a href="/sign_up" className="bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 gaming-glow text-center no-underline" onClick={closeMobileMenu}>
                Get Started
              </a>
              <a href="/sign_in" className="bg-white border-2 border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center no-underline" onClick={closeMobileMenu}>
                Log In
              </a>
            </div>

            <a href="#home" className="text-2xl text-gray-300 hover:text-gaming-gold transition-colors" onClick={closeMobileMenu}>
              Home
            </a>
            <a href="#about" className="text-2xl text-gray-300 hover:text-gaming-gold transition-colors" onClick={closeMobileMenu}>
              About
            </a>
            <a href="#services" className="text-2xl text-gray-300 hover:text-gaming-gold transition-colors" onClick={closeMobileMenu}>
              Services
            </a>
            <a href="#testimonials" className="text-2xl text-gray-300 hover:text-gaming-gold transition-colors" onClick={closeMobileMenu}>
              Testimonials
            </a>
            <a href="#contact" className="text-2xl text-gray-300 hover:text-gaming-gold transition-colors" onClick={closeMobileMenu}>
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen hero-gradient overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark via-gaming-blue to-primary-600 opacity-90"></div>

        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in">
            <h1 className="font-gaming text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="text-gaming-gold text-glow">RANK UP</span>
              <br />
              <span className="text-white">ACADEMY</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
              From <span className="text-gaming-gold font-bold">GETTING CARRIED</span> to <span className="text-gaming-gold font-bold">BEING THE CARRY</span>
            </p>

            <p className="text-lg text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0">
              Master Overwatch 2 with personalized coaching from Top 500 players.
              Perfect your gameplay with heroes like Tracer, Genji, Ana, and Reinhardt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 gaming-glow">
                START YOUR JOURNEY
              </button>
              <button className="border-2 border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300">
                WATCH DEMO
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative animate-fade-in">
            {/* Trophy */}
            <div className="absolute top-0 right-0 lg:right-20 z-20">
              <div className="w-24 h-32 md:w-32 md:h-40 bg-gradient-to-b from-gaming-gold to-secondary-500 rounded-t-full relative gaming-glow">
                <div className="absolute inset-2 bg-gradient-to-b from-yellow-300 to-gaming-gold rounded-t-full"></div>
                <div className="absolute bottom-0 w-full h-6 bg-gaming-gold rounded-b-lg"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-700 rounded"></div>
              </div>
            </div>

            {/* Gaming Character */}
            <div className="relative z-10 flex justify-center">
              <div className="w-64 h-80 md:w-80 md:h-96 bg-gradient-to-b from-primary-600 to-gaming-blue rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-48 bg-gaming-gold opacity-20 rounded-t-full"></div>
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gaming-gold rounded-full opacity-60"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-primary-500 opacity-40 rounded"></div>
                <div className="absolute bottom-20 right-8 w-4 h-20 bg-gaming-gold rounded transform rotate-12"></div>
              </div>
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

              <button className="w-full bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg">
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
