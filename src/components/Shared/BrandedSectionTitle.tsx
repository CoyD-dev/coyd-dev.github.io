import React from 'react';
import styles from './BrandedSectionTitle.module.css';

interface BrandedSectionTitleProps {
  title: string;
  subtitle?: string;
  titleStyle?: React.CSSProperties;
  subtitleStyle?: React.CSSProperties;
  className?: string;
  padding?: string;
  id?: string;
}

const BrandedSectionTitle: React.FC<BrandedSectionTitleProps> = ({
  title,
  subtitle,
  titleStyle,
  subtitleStyle,
  className = '',
  padding = '48px 0',
  id
}) => {
  const sectionClassName = className === 'brandingSection'
    ? `${styles.brandedSection} ${styles.brandingSection}`
    : `${styles.brandedSection} ${className}`;

  return (
    <section
      id={id}
      className={sectionClassName}
      style={{ padding }}
    >
      {/* Left Line */}
      <div className={styles.line}></div>

      {/* Center Text */}
      <div className={styles.textContainer}>
        <h2
          className={`font-gaming ${styles.title}`}
          style={titleStyle}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={styles.subtitle}
            style={subtitleStyle}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Right Line */}
      <div className={styles.line}></div>
    </section>
  );
};

export default BrandedSectionTitle;