import React, { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check for existing cookie consent on component mount
  useEffect(() => {
    // Set default consent to 'denied' for all parameters
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied'
      });
    }

    const savedConsent = localStorage.getItem('cookieConsent') as 'accepted' | 'rejected' | null;
    if (!savedConsent) {
      setIsVisible(true);
    } else if (savedConsent === 'accepted') {
      // Enable all Google Analytics consent parameters if consent was previously given
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
          'analytics_storage': 'granted'
        });
        
         // trigger page_view immediately
        (window as any).gtag('event', 'page_view', {
          page_path: window.location.pathname,
          page_title: document.title
        });
      }
    }
  }, []);

  const handleConsent = (consent: 'accepted' | 'rejected') => {
    localStorage.setItem('cookieConsent', consent);
    setIsVisible(false);

    if (consent === 'accepted') {
      // Grant all consent parameters when user accepts
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
          'analytics_storage': 'granted'
        });

         // trigger page_view immediately
        (window as any).gtag('event', 'page_view', {
          page_path: window.location.pathname,
          page_title: document.title
        });
      }
    } else {
      // Keep all consent parameters denied (they're already set to 'denied' by default)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'analytics_storage': 'denied'
        });
      }
    }
  };

  if (!isVisible) {
    return null;
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h4 className={`font-gaming ${styles.title}`}>WE USE COOKIES</h4>
            <p className={styles.description}>
              We use cookies and similar technologies to improve your experience, analyze website traffic, and personalize content.
              By clicking "Accept All", you consent to our use of cookies for analytics and marketing purposes.
             
            </p>
          </div>
          <div className={styles.buttons}>
            <button
              onClick={() => handleConsent('rejected')}
              className={`font-gaming ${styles.rejectBtn}`}
            >
              DECLINE
            </button>
            <button
              onClick={() => handleConsent('accepted')}
              className={`font-gaming ${styles.acceptBtn}`}
            >
              ACCEPT ALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;