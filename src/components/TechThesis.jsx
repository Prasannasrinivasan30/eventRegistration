import './TechThesis.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import NavBar from './Navbar';
import Footer from './Footer';
import { useEffect, useRef } from 'react';

const TechThesis = () => {
  const descriptionRef = useRef(null);
  const contactRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const animationConfig = {
      scale: 0,
      opacity: 0,
    };

    const animationTarget = {
      scale: 1,
      opacity: 1,
      duration: 0.8, // Reduced duration for a quicker animation
      ease: 'power3.out',
    };

    const triggerConfig = {
      start: 'top 85%',
      end: 'top 75%',
      toggleActions: 'play none none none',
      once: true,
    };

    // Animate Description Section
    if (descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        animationConfig,
        {
          ...animationTarget,
          scrollTrigger: {
            trigger: descriptionRef.current,
            ...triggerConfig,
          },
        }
      );
    }

    // Animate Contact Section
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current,
        animationConfig,
        {
          ...animationTarget,
          scrollTrigger: {
            trigger: contactRef.current,
            ...triggerConfig,
          },
        }
      );
    }
  }, []);

  return (
    <div className="box">
      <NavBar />

      <div className="video-section">
        <video className="video" autoPlay loop muted>
          <source src="/videos/feature-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1 className="video-text">TechThesis - Paper Presentation</h1>
        </div>
      </div>

      <div className="register-container">
        <button className="register-button">Register Now</button>
      </div>

      <div className="total">
        <div className="container_new">
          {/* Static Rules Section */}
          <div className="rules">
            <h1 className="title"><b>Rules & Regulations</b></h1>
            <ul>
              <li>Maximum of 3 participants per team.</li>
              <li>Presentation time: 8 minutes, followed by 2 minutes for Q&A.</li>
              <li>Papers must be submitted before the event starts.</li>
              <li>Use PowerPoint for the presentation.</li>
              <li>Only original and relevant topics will be accepted.</li>
              <li>The number of slides must be 10-15.</li>
            </ul>
          </div>

          {/* Animated Description Section */}
          <div className="description" ref={descriptionRef}>
            <h1 className="title"><b>Description</b></h1>
            <ul>
              <li>Are you ready to present your creative ideas and research?</li>
              <li>
                Find a complete solution to your chosen topic with the help of your
                technical experience, creativity, and passion.
              </li>
              <li>
                Capture the imagination of the panel of judges with your knowledge,
                presentation skills, and unique perspectives.
              </li>
              <li>
                Show your ideas and contribute to a better future in Electronics and
                Communication Engineering!
              </li>
            </ul>
          </div>

          {/* Animated Contact Section */}
          <div className="contact" ref={contactRef}>
            <h1 className="title"><b>Contact</b></h1>
            <p>Prem Pradeep S</p>
            <p>7708365986</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TechThesis;
