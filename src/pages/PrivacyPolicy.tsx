import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gaming-dark text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-gaming font-bold text-gaming-gold mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gaming-gold mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We collect information you provide directly to us, such as:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Contact information (name, email address)</li>
              <li>Gaming preferences and skill level</li>
              <li>Training goals and objectives</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gaming-gold mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide personalized coaching services</li>
              <li>Communicate about training programs</li>
              <li>Improve our educational content</li>
              <li>Send relevant updates and announcements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gaming-gold mb-4">
              3. Information Sharing
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gaming-gold mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gaming-gold mb-4">
              5. Cookies and Analytics
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We use cookies and similar technologies to enhance your experience and analyze website usage patterns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gaming-gold mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gaming-gold mb-4">
              7. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us through our official channels.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              Last updated: September 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;