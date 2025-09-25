import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { Navigation } from './components/Navigation';
import { HomePage, TermsOfService, PrivacyPolicy, ContactUs } from './pages';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gaming-dark text-white">
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