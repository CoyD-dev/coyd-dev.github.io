import React, { useEffect } from 'react';
import styles from './ContactUsPage.module.css';

const ContactUsPage: React.FC = () => {
  useEffect(() => {
    // Add page-specific class to body
    document.body.classList.add('contact-us-page');

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('contact-us-page');
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
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

export default ContactUsPage;