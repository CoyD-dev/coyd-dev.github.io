import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { Navigation } from './components/Navigation';
import { HomePage, TermsOfService, PrivacyPolicy, ContactUs } from './pages';

// Component to handle redirects from 404.html
const RedirectHandler: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a stored redirect path from 404.html
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath && redirectPath !== '/') {
      // Navigate to the intended path immediately
      // (sessionStorage is cleared by HomePage to prevent loading loops)
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

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