import React, { useState, useRef } from 'react';
import { BrandedSectionTitle } from '../Shared';
import testimonialsData from '../../testemonials.json';
import styles from './Testimonials.module.css';

interface TestimonialsProps {
  initialDisplayCount?: number;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  initialDisplayCount = 4
}) => {
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const openImageViewer = (imageUrl: string) => {
    const index = testimonialsData.indexOf(imageUrl);
    setSelectedImageIndex(index);
  };

  const closeImageViewer = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;

    let newIndex;
    if (direction === 'prev') {
      newIndex = selectedImageIndex === 0 ? testimonialsData.length - 1 : selectedImageIndex - 1;
    } else {
      newIndex = selectedImageIndex === testimonialsData.length - 1 ? 0 : selectedImageIndex + 1;
    }
    setSelectedImageIndex(newIndex);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (selectedImageIndex === null) return;

    if (event.key === 'Escape') {
      closeImageViewer();
    } else if (event.key === 'ArrowLeft' && selectedImageIndex > 0) {
      navigateImage('prev');
    } else if (event.key === 'ArrowRight' && selectedImageIndex < testimonialsData.length - 1) {
      navigateImage('next');
    }
  };

  const handleGalleryToggle = () => {
    if (showAllGallery) {
      // If we're collapsing (showing less), scroll to the section beginning
      setShowAllGallery(false);
      // Small delay to let the state update, then scroll
      setTimeout(() => {
        if (sectionRef.current) {
          const elementTop = sectionRef.current.offsetTop;
          const navbarHeight = 80; // Navbar height with extra padding
          const scrollToPosition = elementTop - navbarHeight;

          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    } else {
      // If we're expanding, just show all
      setShowAllGallery(true);
    }
  };

  return (
    <div ref={sectionRef}>
      {/* Testimonials Section */}
      <BrandedSectionTitle
        id="testimonials"
        title="TESTIMONIALS"
      />

      {/* Gallery Section */}
      <section className="bg-gaming-dark">
        <div className="container mx-auto px-4">
          <div className={styles.galleryContainer}>
            {/* Gallery Grid */}
            <div className={styles.galleryGrid}>
              {/* Generate gallery tiles from testimonials data */}
              {testimonialsData
                .slice(0, showAllGallery ? testimonialsData.length : initialDisplayCount)
                .map((imageUrl, index) => (
                  <div
                    key={index}
                    className={styles.galleryTile}
                    onClick={() => openImageViewer(imageUrl)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openImageViewer(imageUrl);
                      }
                    }}
                    aria-label={`View testimonial ${index + 1}`}
                  >
                    <img
                      src={imageUrl}
                      alt={`Testimonial ${index + 1}`}
                      className={styles.galleryImage}
                    />
                  </div>
                ))}
            </div>

            {/* Show All Button */}
            <div
              className={styles.galleryToggle}
              onClick={handleGalleryToggle}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleGalleryToggle();
                }
              }}
              aria-label={showAllGallery ? 'Show fewer testimonials' : 'Show all testimonials'}
            >
              <span>{showAllGallery ? 'LESS' : 'ALL'}</span>
              <svg
                className={`${styles.galleryChevron} ${showAllGallery ? styles.rotated : ''}`}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImageIndex !== null && (
        <div
          className={styles.imageViewerOverlay}
          onClick={closeImageViewer}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div className={styles.imageViewerContainer} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.imageViewerClose}
              onClick={closeImageViewer}
              aria-label="Close image viewer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <img
              src={testimonialsData[selectedImageIndex]}
              alt="Enlarged testimonial"
              className={styles.imageViewerImage}
            />
          </div>

          {/* Previous Arrow - Outside Modal */}
          {selectedImageIndex > 0 && (
            <button
              className={`${styles.imageViewerArrow} ${styles.imageViewerArrowLeft}`}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              aria-label="Previous image"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* Next Arrow - Outside Modal */}
          {selectedImageIndex < testimonialsData.length - 1 && (
            <button
              className={`${styles.imageViewerArrow} ${styles.imageViewerArrowRight}`}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              aria-label="Next image"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Testimonials;