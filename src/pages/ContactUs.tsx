import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs: React.FC = () => {
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
            Welcome User,
          </h1>

          <div className={styles.section}>
            <p className={styles.sectionText}>
              Have a question? We will reply as soon as possible.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionText}>
              <a
                href="mailto:support@rankupacademy.gg"
                className={styles.emailLink}
              >
                support@rankupacademy.gg
              </a>
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

export default ContactUs;