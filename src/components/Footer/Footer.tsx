import React from 'react';
import styles from './Footer.module.css';

interface FooterLink {
  href: string;
  text: string;
  label: string;
}

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const footerLinks: FooterLink[] = [
    {
      href: "https://rankupacademy.gg/contact",
      text: "CONTACT US",
      label: "Contact Rank Up Academy"
    },
    {
      href: "https://rankupacademy.gg/terms_of_service",
      text: "TERMS OF SERVICE",
      label: "Terms of Service"
    },
    {
      href: "https://rankupacademy.gg/privacy_policy",
      text: "PRIVACY POLICY",
      label: "Privacy Policy"
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className={`${styles.footer} ${className}`}
    >
      <div className={styles.container}>
        {/* Left side - Links */}
        <div className={styles.links}>
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-gaming ${styles.link}`}
              aria-label={link.label}
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Right side - Copyright */}
        <div className={`font-gaming ${styles.copyright}`}>
          © Rank Up Academy {currentYear}. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;