import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { Navigation } from './components/Navigation';
import { HomePage, TermsOfService, PrivacyPolicy, ContactUs } from './pages';

// Component to handle redirects from 404.html
const RedirectHandler: React.FC<{ onRedirectCheck: (hasRedirect: boolean) => void }> = ({ onRedirectCheck }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a stored redirect path from 404.html
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath && redirectPath !== '/') {
      // Clear the stored path
      sessionStorage.removeItem('redirectPath');
      // Navigate to the intended path
      navigate(redirectPath, { replace: true });
      onRedirectCheck(true);
    } else {
      // No redirect needed
      onRedirectCheck(false);
    }
  }, [navigate, onRedirectCheck]);

  return null; // This component doesn't render anything
};

function App() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gaming-dark text-white">
        <RedirectHandler onRedirectCheck={setIsRedirecting} />
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage isRedirecting={isRedirecting} />} />
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