import React, { useEffect, useRef } from 'react';
import styles from './Benefits.module.css';

interface BenefitItem {
  id: string;
  icon: string;
  iconAlt: string;
  title: string;
  content: React.ReactNode;
  animationDirection: 'left' | 'right';
  hasSpecialPadding?: boolean;
  hasIconFilter?: boolean;
}

const Benefits: React.FC = () => {
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastScrollY = useRef(0);

  const benefitItems: BenefitItem[] = [
    {
      id: 'time',
      icon: 'https://rankupacademy.gg/assets/clock-008571e5616a2d242587b0511825a0af4470159dece49abf6eb627c4a4357fcb.svg',
      iconAlt: 'Clock icon',
      title: 'TIME',
      content: 'How many hours have you poured into the game without seeing the results you want? Break free from the cycle of stagnation and make every session count.',
      animationDirection: 'right',
      hasIconFilter: true
    },
    {
      id: 'potential',
      icon: 'https://rankupacademy.gg/assets/rocket-72815354ca136c3dec81c3193c0362b5afa50f4c387a3a652ff76be8a102d599.svg',
      iconAlt: 'Rocket icon',
      title: 'POTENTIAL',
      content: 'Discover what\'s holding you back with personalized reviews from our top-ranked specialists. We don\'t just tell you what to improve; we guide you step-by-step on the path to success.',
      animationDirection: 'left',
      hasIconFilter: true
    },
    {
      id: 'mindset',
      icon: 'https://rankupacademy.gg/assets/brain-b02a81b71c56197446386d01155e71e2ca8dc12b390cbb2517ebab578f721198.svg',
      iconAlt: 'Brain icon',
      title: 'MINDSET',
      content: (
        <ul className="text-gray-300 text-xl leading-relaxed max-w-4xl space-y-3">
          <li className="flex items-center">
            <span className="mr-3 text-2xl">•</span>
            Engage with Specialists and learn how they think and execute
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-2xl">•</span>
            Witness noticeable improvement as fast as possible
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-2xl">•</span>
            Master the simple fundamentals that set the best apart
          </li>
        </ul>
      ),
      animationDirection: 'right',
      hasSpecialPadding: true,
      hasIconFilter: false
    },
    {
      id: 'access',
      icon: 'https://rankupacademy.gg/assets/instructor-654cdaaf9027644d5c47c7b4d058a67979d923d57d03c2a7a9b194ed626af84b.svg',
      iconAlt: 'Instructor icon',
      title: 'ACCESS',
      content: (
        <ul className="text-gray-300 text-xl leading-relaxed max-w-4xl space-y-3">
          <li className="flex items-center">
            <span className="mr-3 text-2xl">•</span>
            Connect with Specialists who, like you, started from the bottom and are now among the highest ranks
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-2xl">•</span>
            Receive tailored feedback at every step of your journey
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-2xl">•</span>
            Engage in conversation with the 0.01% of players
          </li>
        </ul>
      ),
      animationDirection: 'left',
      hasSpecialPadding: true,
      hasIconFilter: true
    },
    {
      id: 'community',
      icon: 'https://rankupacademy.gg/assets/community-f7e262d6759f90b85195517f4607ee40d8ae61ff34656e0eaa59beaee097df5c.svg',
      iconAlt: 'Community icon',
      title: 'COMMUNITY',
      content: (
        <ul className="text-gray-300 text-xl leading-relaxed max-w-4xl space-y-3">
          <li className="flex items-start">
            <span className="mr-3 text-2xl" style={{ paddingTop: "0.125rem" }}>•</span>
            Connect with players who share your journey and understand the frustration of being stuck. Together, we elevate each other and celebrate the victories as you climb the ranks.
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-2xl">•</span>
            300+ on the same page as you
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-2xl">•</span>
            Play alongside others who share the passion for improvement
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-2xl">•</span>
            Win both in and out of the game and celebrate your Rank Ups
          </li>
        </ul>
      ),
      animationDirection: 'right',
      hasSpecialPadding: true,
      hasIconFilter: true
    }
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const isScrollingUp = currentScrollY < lastScrollY.current;
          lastScrollY.current = currentScrollY;

          if (isScrollingUp) {
            // Check each benefit item to see if it should animate out
            benefitRefs.current.forEach((ref) => {
              if (ref) {
                const rect = ref.getBoundingClientRect();
                // Convert 15rem to pixels (assuming 1rem = 16px)
                const fadeOutThreshold = 15 * 16; // 240px
                const isApproachingHidden = rect.top > (window.innerHeight - fadeOutThreshold);

                if (isApproachingHidden && ref.classList.contains(styles.benefitsAnimateIn)) {
                  ref.classList.remove(styles.benefitsAnimateIn);
                  ref.classList.add(styles.benefitsAnimateOut);
                }
              }
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add(styles.benefitsAnimateIn);
            target.classList.remove(styles.benefitsAnimateOut);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Add scroll listener for reverse animations
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Observe all benefit items
    const currentRefs = benefitRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className={`bg-gaming-dark ${styles.benefitsSectionContainer}`}>
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          {/* Golden Vertical Line */}
          <div
            id="benefits-vertical-line"
            className={styles.benefitsVerticalLine}
          ></div>

          {/* Benefits List */}
          <div style={{ paddingTop: "2rem" }}>
            {benefitItems.map((benefit, index) => (
              <div
                key={benefit.id}
                ref={(el) => { benefitRefs.current[index] = el; }}
                className={`flex items-start ${styles.benefitItem} ${styles.benefitsScrollAnimation} ${
                  benefit.animationDirection === 'left' ? styles.benefitsSlideFromLeft : styles.benefitsSlideFromRight
                }`}
              >
                {/* Circle Bullet */}
                <div className={styles.benefitCircle}>
                  <img
                    src={benefit.icon}
                    alt={benefit.iconAlt}
                    className={benefit.hasIconFilter ? styles.benefitIconFiltered : styles.benefitIcon}
                  />
                </div>

                {/* Content */}
                <div className={benefit.hasSpecialPadding ? styles.benefitContentWithPadding : styles.benefitContent}>
                  <h3 className={`font-gaming font-bold text-white ${styles.benefitTitle} uppercase tracking-wider`}>
                    {benefit.title}
                  </h3>
                  {typeof benefit.content === 'string' ? (
                    <p className="text-gray-300 text-xl leading-relaxed max-w-4xl">
                      {benefit.content}
                    </p>
                  ) : (
                    benefit.content
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;