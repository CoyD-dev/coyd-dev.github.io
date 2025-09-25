import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy: React.FC = () => {
  const backgroundImageUrl = '/assets/square_tracer-hero-image.jpg';

  return (
    <div className={styles.pageContainer}>
      {/* Full-screen background image with transparency */}
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></div>

      {/* Centered content box */}
      <div className={styles.contentBox}>
        <div className={styles.content}>
          <h1 className={`font-gaming ${styles.title}`}>
            Privacy Policy
          </h1>

          <div className={styles.section}>
            <p className={styles.sectionText}>
              We limit the collection of personal information to your provided username and email address, assuring you that we do not disclose such details to external parties. Rigorous measures are implemented for the confidential storage and management of personal data. Please note that your content, excluding credit card information, may be transmitted unencrypted, adapting to technical necessities of networks or devices.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionText}>
              It is important to highlight that we do not have access to your credit card information, as it is securely handled by our payment gateway providers. Rest assured, credit/debit card details and personally identifiable information are not stored, sold, shared, rented, or leased to any third parties.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionText}>
              Our Website Policies and Terms & Conditions may undergo occasional changes or updates to align with evolving legal requirements and business practices. We encourage users to periodically review our policies to stay informed about how we protect and handle their information.
            </p>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Last updated: September 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;