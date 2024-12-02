import React, { useEffect, useState, useRef } from "react";
import { EnvironmentOutlined, ExperimentOutlined, GlobalOutlined, HomeOutlined, InfoCircleOutlined, ProductOutlined, SafetyCertificateOutlined } from "@ant-design/icons"; // Import ProductOutlined from the appropriate library

const AboutUs: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [elementsVisible, setElementsVisible] = useState(false);
  const [showScrollReminder, setShowScrollReminder] = useState(true);
  const [showTimeline, setShowTimeline] = useState(true); // Track the visibility of the timeline
  const aboutUsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);

      // If user scrolls down, hide the scroll reminder
      if (scrollPosition > 15 && showScrollReminder) {
        setShowScrollReminder(false);
      }

      // Control visibility of sections
      if (scrollPosition > 200) {
        setElementsVisible(true);
      } else {
        setElementsVisible(false);
      }

      const sections = document.querySelectorAll(".about-section");
      const triggerBottom = window.innerHeight * 0.8;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add("appear");
        } else {
          section.classList.remove("appear");
        }
      });

      // Hide the timeline once the user reaches the bottom of the AboutUs section
      if (aboutUsRef.current) {
        const aboutUsHeight = aboutUsRef.current.offsetHeight;
        if (scrollPosition >= aboutUsHeight) {
          setShowTimeline(false); // Hide the timeline once past AboutUs section
        } else {
          setShowTimeline(true); // Show the timeline as long as we're in AboutUs
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showScrollReminder]);

  const sections = [
    { title: "About Us", text: "Petroman Oil Lubricants, based in Oman, has over 25 years of experience in producing a range of lubricants for industries like construction, transportation, and agriculture.",
    icon: <InfoCircleOutlined style={{ fontSize: '40px', color: '#e91e63' }} /> },
    { title: "Our Expertise", text: "Petroman's products meet rigorous standards and are certified by ISO, API, and brands like Renault and Porsche for quality and reliability.", 
      icon: <ExperimentOutlined style={{ fontSize: '40px', color: '#e91e63' }} />  },
    { title: "Global Presence", text: "With operations in over 30 countries, Petroman is a global leader in the lubricant market.", 
      icon: <GlobalOutlined style={{ fontSize: '40px', color: '#e91e63' }} /> },
    { title: "Commitment", text: "The company is dedicated to innovation and environmental sustainability, making it a trusted global partner.", 
      icon: <SafetyCertificateOutlined  style={{ fontSize: '40px', color: '#e91e63' }} /> },
    { title: "Sustainability", text: "Petroman aligns its products and processes with sustainability goals for a better future.", 
      icon: <EnvironmentOutlined  style={{ fontSize: '40px', color: '#e91e63' }} />},
  ];

  const aboutUsHeight = aboutUsRef.current?.offsetHeight || 1200; // Default height in case of issues

  return (

    <div id="abouts" className="about-us-container" ref={aboutUsRef}>
      {/* Scroll Reminder */}
      {showScrollReminder && (
        <div className="scroll-reminder">
          <p>Scroll down to explore more</p>
        </div>
      )}

      {/* Timeline (Progress Bar) */}
      {showTimeline && (
        <div
          className="timeline"
          style={{
            height: `${Math.min((scrollY / aboutUsHeight) * 100, 100)}%`,
          }}
        ></div>
      )}

      {/* Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          className={`about-section ${index % 2 === 0 ? "left" : "right"} ${elementsVisible ? "appear" : ""}`}
        >
          <div className="section-content">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
          <div className="section-icon">
            {section.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
