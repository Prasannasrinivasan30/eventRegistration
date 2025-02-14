import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import NavBar from './Navbar';
import Footer from './Footer';
import React, { useEffect, useRef } from 'react';
import './TechTrek.css'

const TechTrek = () => {
    const rulesRef = useRef(null);
    const descriptionRef = useRef(null);
    const contactRef = useRef(null);
  
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      // Animation for Rules section
      if (rulesRef.current) {
        gsap.fromTo(
          rulesRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: rulesRef.current,
              start: 'top 80%',
              end: 'top 60%',
              once: true,
              toggleActions: 'play none none none', // Ensures the animation only plays once when entering the viewport
            },
          }
        );
      }
  
      // Animation for Description section
      if (descriptionRef.current) {
        gsap.fromTo(
          descriptionRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: descriptionRef.current,
              start: 'top 80%',
              end: 'top 60%',
              once: true,
              toggleActions: 'play none none none', // Ensures the animation only plays once when entering the viewport
            },
          }
        );
      }
  
      // Animation for Contact section
      if (contactRef.current) {
        gsap.fromTo(
          contactRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: contactRef.current,
              start: 'top 80%',
              end: 'top 60%',
              once: true,
              toggleActions: 'play none none none', // Ensures the animation only plays once when entering the viewport
            },
          }
        );
      }
    }, []);
  
    return (
      <div className='box'>
        <NavBar />
        <div className="total">
          <div className="container">
            <div className="rules" ref={rulesRef}>
              <h1 className='title'><b>Rules & Regulations</b></h1>
              <br />
              <ul>
                <li>Maximum of 3 participants per team.</li>
                <li>Presentation time: 8 minutes, followed by 2 minutes for Q&A.</li>
                <li>Papers must be submitted before the event starts.</li>
                <li>Use PowerPoint for the presentation.</li>
                <li>Only original and relevant topics will be accepted.</li>
                <li>The number of slides must be 10-15.</li>
              </ul>
            </div>
  
            <div className="description" ref={descriptionRef}>
              <h1 className='title'><b>Description</b></h1>
              <br />
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
  
            <div className="contact" ref={contactRef}>
              <h1 className='title'><b>Contact</b></h1>
              <br />
              Prem Pradeep S<br />
              7708365986
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

export default TechTrek