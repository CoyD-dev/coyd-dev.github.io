import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

interface NavigationLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const navigationLinks: NavigationLink[] = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' }
  ];

  const pageLinks: NavigationLink[] = [
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/privacy-policy', label: 'Privacy Policy' }
  ];

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

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-gaming-dark backdrop-blur-sm ${styles.navShadow}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center no-underline">
            <img
              src="https://rankupacademy.gg/assets/RUA-Logo-147557a47311e385321694bba7ec05e8483dde36386908d1ef3bf1d2854d1ee5.svg"
              alt="Rank Up Academy Logo"
              className="h-10 w-auto mr-3"
            />
            <span className="font-gaming text-xl font-bold text-gaming-gold">RANK UP ACADEMY</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gaming-gold transition-colors font-gaming text-sm"
              >
                {link.label}
              </a>
            ))}

            {/* Page Links Separator */}
            <div className="h-4 w-px bg-gray-600"></div>

            {pageLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-300 hover:text-gaming-gold transition-colors font-gaming text-sm no-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://rankupacademy.gg/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="md-show-desktop bg-white border-2 border-gaming-gold text-black hover:bg-gaming-gold hover:text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 no-underline font-gaming"
            >
              Log In
            </a>
            <a
              href="https://rankupacademy.gg/users/sign_up"
              target="_blank"
              rel="noopener noreferrer"
              className="md-show-desktop bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 gaming-glow no-underline font-gaming"
            >
              Get Started
            </a>

            {/* Mobile menu button */}
            <button
              className="md-hidden-mobile bg-gaming-gold text-gaming-dark p-2 rounded-lg"
              onClick={handleMobileMenuToggle}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
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
          className={`md:hidden fixed inset-0 z-60 ${styles.mobileMenuOverlay} ${
            isClosing
              ? styles.mobileMenuExitActive
              : isAnimating
                ? styles.mobileMenuEnterActive
                : styles.mobileMenuEnter
          }`}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 bg-gaming-gold text-gaming-dark p-2 rounded-lg z-50"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
            <div className="flex flex-col space-y-4">
              <a
                href="https://rankupacademy.gg/users/sign_up"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 gaming-glow text-center no-underline font-gaming"
                onClick={closeMobileMenu}
              >
                Get Started
              </a>
              <a
                href="https://rankupacademy.gg/users/sign_in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-gaming-gold text-black hover:bg-gaming-gold hover:text-gaming-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center no-underline font-gaming"
                onClick={closeMobileMenu}
              >
                Log In
              </a>
            </div>

            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl text-gray-300 hover:text-gaming-gold transition-colors font-gaming"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}

            {/* Page Links Separator */}
            <div className="w-full h-px bg-gray-600 my-4"></div>

            {pageLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xl text-gray-300 hover:text-gaming-gold transition-colors font-gaming no-underline"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;