import React, { useState, useEffect, useRef } from 'react';
import { BrandedSectionTitle } from './components/Shared';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { VideoIntro } from './components/VideoIntro';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';

function App() {
  const [openAccordionIndices, setOpenAccordionIndices] = useState<number[]>([0]);



  const toggleAccordion = (index: number) => {
    setOpenAccordionIndices(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };


  const faqData = [
    {
      question: "AM I GUARANTEED TO RANK UP?",
      answer: "ACHIEVING A HIGHER RANK DEPENDS ON YOUR COMMITMENT. IF YOU IMPLEMENT OUR FEEDBACK, PUT IN THE EFFORT, AND TAKE RESPONSIBILITY FOR YOUR PROGRESS, YOU WILL RANK UP. IT'S AKIN TO ASKING A GYM FOR A GUARANTEE ON A 6-PACK. SHOW UP, FOLLOW THE GUIDANCE, AND TRAIN HARD FOR VISIBLE RESULTS."
    },
    {
      question: "I'M IN X COUNTRY, CAN I JOIN?",
      answer: "OF COURSE! RANK UP ACADEMY IS ACCESSIBLE TO ANYONE WORLDWIDE. WHILE CLASSES ARE CONDUCTED IN REAL-TIME, ALL SESSIONS ARE RECORDED, ALLOWING YOU TO WATCH AT YOUR CONVENIENCE."
    },
    {
      question: "IS IT SUITABLE FOR X RANK?",
      answer: "YES. RANK UP ACADEMY CATERS TO PLAYERS ACROSS ALL RANKS, FROM BRONZE 5 TO TOP 500. OUR TEACHINGS ARE FOCUSED ON FUNDAMENTALS COMBINED WITH CUSTOMIZED FEEDBACK FOR EACH INDIVIDUAL, ENSURING MAXIMUM PROGRESS FOR EVERYONE."
    },
    {
      question: "I'M ON CONSOLE, CAN I JOIN?",
      answer: "ABSOLUTELY. ALL PLATFORMS ARE WELCOME AT RANK UP ACADEMY."
    },
    {
      question: "I DON'T HAVE TIME, IS IT WORTH IT?",
      answer: "DEFINITELY. RANK UP ACADEMY MAXIMIZES THE VALUE YOU GET FROM EVERY HOUR INVESTED. QUALITY IMPROVEMENT WITH LIMITED TIME IS FAR BETTER THAN MINDLESSLY GRINDING WITH AN EXCESS OF TIME."
    },
    {
      question: "I PLAY X HERO, CAN YOU TEACH ME?",
      answer: "WITHOUT A DOUBT. RANK UP ACADEMY COVERS SIMPLE AND PRACTICAL FUNDAMENTALS FOR EVERY HERO."
    }
  ];



  return (
    <div className="min-h-screen bg-gaming-dark text-white">

      <Navigation />

      <Hero />

      {/* Rank Up Academy Branding Section */}
      <BrandedSectionTitle
        id="about"
        title="RANK UP ACADEMY"
        subtitle="WHERE YOUR IMPROVEMENT BEGINS"
        className="brandingSection"
      />

      <VideoIntro />

      <Benefits />

      <Testimonials />

      {/* Choice Section */}
      <BrandedSectionTitle
        title="IT IS YOUR CHOICE"
        subtitle="INSTEAD OF HITTING QUEUE AGAIN, ACT TO IMPROVE"
        titleStyle={{ marginBottom: "8px" }}
        subtitleStyle={{
          fontSize: "0.875rem",
          fontWeight: "600",
          letterSpacing: "3px",
          opacity: "0.9"
        }}
      />

      {/* Three Column Hero Section */}
      <section id="pricing" className="pricing-section">
        <div className="pricing-grid">
          {/* Left Column - Zenyatta with fade from left */}
          <div className="pricing-column">
            <div className="pricing-bg-zenyatta">
              <div className="pricing-overlay-left"></div>
            </div>
          </div>

          {/* Center Column - Fixed width yellow box */}
          <div className="pricing-center-box">
              <div className="pricing-content">
                {/* Title */}
                <h2 className="font-gaming pricing-title">
                  $75 / MONTH
                </h2>

                {/* Bullet List */}
                <ul className="pricing-list">
                  <li className="pricing-list-item">
                    <span className="pricing-list-bullet">•</span>
                    PERSONALIZED MONTHLY VOD REVIEW
                  </li>
                  <li className="pricing-list-item">
                    <span className="pricing-list-bullet">•</span>
                    ACCESS TO SIMPLE STEP BY STEP GUIDES
                  </li>
                  <li className="pricing-list-item">
                    <span className="pricing-list-bullet">•</span>
                    JOIN A LIKE-MINDED COMMUNITY
                  </li>
                  <li className="pricing-list-item">
                    <span className="pricing-list-bullet">•</span>
                    RECEIVE TAILORED FEEDBACK
                  </li>
                  <li className="pricing-list-item">
                    <span className="pricing-list-bullet">•</span>
                    CANCEL ANYTIME, RISK-FREE
                  </li>
                  <li className="pricing-list-item">
                    <span className="pricing-list-bullet">•</span>
                    HUNDREDS OF CLASSES AVAILABLE
                  </li>
                </ul>
              </div>
          </div>

          {/* Right Column - Ana with gradient transparent to right */}
          <div className="pricing-column">
            <div className="pricing-bg-ana">
              <div className="pricing-overlay-right"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{
        backgroundColor: "#1a1a1a",
        padding: "3rem 0 1rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
        {/* Button */}
        <a href="https://rankupacademy.gg/users/sign_up" target="_blank" rel="noopener noreferrer" className="bg-gaming-gold hover:bg-secondary-500 text-gaming-dark font-bold py-4 px-8 transition-all duration-300 transform hover:scale-105 gaming-glow text-lg font-gaming no-underline" style={{
          marginBottom: "0.5rem",
          textTransform: "uppercase",
          letterSpacing: "1px",
          borderRadius: "5px"
        }}>
          JOIN RANK UP ACADEMY
        </a>

        {/* Text Lines */}
        <div style={{
          color: "#FCD305",
          fontWeight: "200",
          letterSpacing: "1px"
        }}>
          <p className="font-gaming" style={{
            fontSize: "0.9rem",
            margin: "0.5rem 0",
            textTransform: "uppercase"
          }}>
            NUMBERS ARE LIMITED, SECURE YOUR
          </p>
          <p className="font-gaming" style={{
            fontSize: "0.9rem",
            margin: "0.5rem 0",
            textTransform: "uppercase"
          }}>
            SPOT AT THIS LOCKED-IN PRICE FAST.
          </p>
        </div>
      </section>

      {/* Full-width Alternative Text Section */}
      <section style={{
        backgroundColor: "#1a1a1a",
        padding: "2rem 2rem 3rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        boxSizing: "border-box"
      }}>
        <div style={{
          maxWidth: "1200px",
          width: "100%"
        }}>
          <p className="font-gaming" style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "#FCD305",
            margin: "0",
            lineHeight: "1.2",
            letterSpacing: "1px"
          }}>
            OR CONTINUE WASTING HUNDREDS OF HOURS GRINDING
          </p>
          <p className="font-gaming" style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "#FC4F05",
            margin: "0.5rem 0 0 0",
            lineHeight: "1.2",
            letterSpacing: "1px"
          }}>
            WITHOUT PROGRESS
          </p>
        </div>
      </section>

      {/* Q&A Accordion Section */}
      <section id="faq" style={{
        backgroundColor: "#1a1a1a",
        padding: "0 2rem 1rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        boxSizing: "border-box"
      }}>
        <div style={{
          maxWidth: "800px",
          width: "100%"
        }}>

          {faqData.map((faq, index) => (
            <div key={index} style={{
              marginBottom: "1rem"
            }}>
              {/* Question Header - Full Width */}
              <div
                style={{
                  position: "relative",
                  left: "50%",
                  right: "50%",
                  marginLeft: "-50vw",
                  marginRight: "-50vw",
                  width: "100vw",
                  backgroundColor: "#313338",
                  borderTop: "3px solid #313338",
                  borderBottom: "3px solid #313338",
                  transition: "background-color 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#404040"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#313338"}
                onClick={() => toggleAccordion(index)}
              >
                <div
                  style={{
                    width: "100%",
                    padding: "1.5rem 2rem",
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto"
                  }}
                >
                  {/* Filled Triangle Icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transform: openAccordionIndices.includes(index) ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      marginRight: "1rem",
                      flexShrink: 0
                    }}
                  >
                    <polygon
                      points="9,6 18,12 9,18"
                      fill="#ffffff"
                    />
                  </svg>

                  <span className="font-gaming" style={{
                    color: "#ffffff",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    textAlign: "left",
                    letterSpacing: "1px"
                  }}>
                    {faq.question}
                  </span>
                </div>
              </div>

              {/* Answer Content */}
              {openAccordionIndices.includes(index) && (
                <div style={{
                  padding: "2rem 1.5rem",
                  backgroundColor: "#1a1a1a",
                  animation: "fadeIn 0.3s ease-in-out"
                }}>
                  <p style={{
                    color: "#ffffff",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    margin: "0",
                    fontWeight: "400"
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <Footer />


      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

export default App;