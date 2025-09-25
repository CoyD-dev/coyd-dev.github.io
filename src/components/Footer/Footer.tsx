import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

interface FooterLink {
  href: string;
  text: string;
  label: string;
  isExternal?: boolean;
}

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const footerLinks: FooterLink[] = [
    {
      href: "https://rankupacademy.gg/contact",
      text: "CONTACT US",
      label: "Contact Rank Up Academy",
      isExternal: true
    },
    {
      href: "/terms-of-service",
      text: "TERMS OF SERVICE",
      label: "Terms of Service",
      isExternal: false
    },
    {
      href: "/privacy-policy",
      text: "PRIVACY POLICY",
      label: "Privacy Policy",
      isExternal: false
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
            link.isExternal ? (
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
            ) : (
              <Link
                key={index}
                to={link.href}
                className={`font-gaming ${styles.link} no-underline`}
                aria-label={link.label}
              >
                {link.text}
              </Link>
            )
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