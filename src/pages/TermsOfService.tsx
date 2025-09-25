import React from 'react';
import styles from './TermsOfService.module.css';

const TermsOfService: React.FC = () => {
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
        <h1 className={`font-gaming ${styles.title}`}>
          Terms of Service
        </h1>

        <div className={styles.section}>
          <p className={styles.sectionText}>
            These terms and conditions outline the rules and regulations for the use of Rank Up Academy.
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionText}>
            By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Rank Up Academy if you do not accept all of the terms and conditions stated on this page.
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionText}>
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services/products, in accordance with and subject to, prevailing law of. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={`font-gaming ${styles.sectionTitle}`}>
            License
          </h2>
          <p className={styles.sectionText}>
            Unless otherwise stated, Rank Up Academy and/or it's licensors own the intellectual property rights for all material on Rank Up Academy. All intellectual property rights are reserved. You may view and/or print pages from Rank Up Academy for your own personal use subject to restrictions set in these terms and conditions.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={`font-gaming ${styles.sectionTitle}`}>
            You must not:
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Republish material from Rank Up Academy</li>
            <li className={styles.listItem}>Sell, rent or sub-license material from Rank Up Academy</li>
            <li className={styles.listItem}>Reproduce, duplicate or copy material from Rank Up Academy</li>
            <li className={styles.listItem}>Redistribute content from Rank Up Academy (unless content is specifically made for redistribution).</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={`font-gaming ${styles.sectionTitle}`}>
            Reservation of Rights
          </h2>
          <p className={styles.sectionText}>
            We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link related to Rank Up Academy. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to Rank Up Academy, you agree to be bound to and abide by these linking terms and conditions.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={`font-gaming ${styles.sectionTitle}`}>
            Refund/Return Policy:
          </h2>
          <p className={styles.sectionText}>
            Please note that all purchases from Rank Up Academy are non-refundable. This policy is due to the digital nature of our products and the substantial investment we make in creating and maintaining high-quality content.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={`font-gaming ${styles.sectionTitle}`}>
            Exceptional Circumstances:
          </h2>
          <p className={styles.sectionText}>
            Life is full of unforeseen events, and we acknowledge that exceptional circumstances may arise. In such cases, we are open to considering individual situations on a case-by-case basis. If you find yourself in a unique circumstance that you believe warrants an exception to our standard refund policy, feel free to reach out to our compassionate support team. You can contact us at:
          </p>
          <p className={styles.sectionText}>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:support@rankupacademy.gg"
              className={styles.emailLink}
            >
              support@rankupacademy.gg
            </a>
          </p>
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

export default TermsOfService;