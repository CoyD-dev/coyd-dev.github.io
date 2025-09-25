import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { Navigation } from './components/Navigation';
import { HomePage, TermsOfService, PrivacyPolicy, ContactUs } from './pages';

// Component to clean up redirect markers from 404.html
const RedirectHandler: React.FC = () => {
  useEffect(() => {
    // Clean up any redirect path markers from 404.html
    // Since 404.html now serves the React app directly, we just need to clean up
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
    }
  }, []);

  return null; // This component doesn't render anything
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gaming-dark text-white">
        <RedirectHandler />
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>

        {/* Footer Section */}
        <Footer />

        {/* Cookie Consent Banner */}
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;