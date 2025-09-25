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
      // Clear the stored path
      sessionStorage.removeItem('redirectPath');
      // Navigate to the intended path immediately
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null; // This component doesn't render anything
};

function App() {
  // Check immediately if we have a redirect to prevent any homepage rendering
  const redirectPath = sessionStorage.getItem('redirectPath');
  const hasRedirect = redirectPath && redirectPath !== '/';

  // If we have a redirect, show loading immediately and let RedirectHandler handle the navigation
  if (hasRedirect) {
    return (
      <Router>
        <div className="min-h-screen bg-gaming-dark text-white">
          <RedirectHandler />
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gaming-gold mx-auto mb-4"></div>
              <p className="text-gaming-gold font-semibold">Loading...</p>
            </div>
          </div>
        </div>
      </Router>
    );
  }

  // No redirect, render normal app
  return (
    <Router>
      <div className="min-h-screen bg-gaming-dark text-white">
        <RedirectHandler />
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage isRedirecting={false} />} />
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