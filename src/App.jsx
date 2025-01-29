'use client';

import { useEffect, useState } from "react";
import About from "./components/About";
import UglyHero from "./components/UglyHero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
// import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { AiFillWeiboSquare } from "react-icons/ai";
import TechThesis from "./components/TechThesis";
import TechTrek from "./components/TechTrek";

function App() {
  const languages = [
    'Hello', 'Hola', 'Bonjour', 'Hallo', 'Ciao', '你好', 'こんにちは', '안녕하세요',
    'Привет', 'Olá', 'سلام', 'Habari', 'שָׁלוֹם',
    'မင်္ဂလာပါ', 'Xin chào', 'Aloha', 'नमस्ते', 'こんにちは', 'வணக்கம்',
  ];

  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  // const [borderRadius, setBorderRadius] = useState("0% 0%");

  // Custom Cursor Logic
  // useEffect(() => {
  //   const cursorDot = document.querySelector(".cursor-dot");
  //   const cursorOutline = document.querySelector(".cursor-outline");

  //   const handleMouseMove = (e) => {
  //     const posX = e.clientX;
  //     const posY = e.clientY;

  //     if (cursorDot instanceof HTMLElement && cursorOutline instanceof HTMLElement) {
  //       cursorDot.style.left = `${posX}px`;
  //       cursorDot.style.top = `${posY}px`;

  //       cursorOutline.animate(
  //         { left: `${posX}px`, top: `${posY}px` },
  //         { duration: 500, fill: "forwards" }
  //       );
  //     }
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  // Language Animation Logic
  const [isAudioPlaying, setIsAudioPlaying]=useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLangIndex((prevIndex) => {
        if (prevIndex === languages.length - 1) {
          setTimeout(() => {
            // setBorderRadius("100% 15%");
          }, 290);

          setTimeout(() => {
            setShowAnimation(true);
          }, 300);

          clearInterval(interval);
          return prevIndex;
        } else {
          return prevIndex + 1;
        }
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Disable Scroll During Animation
  useEffect(() => {
    document.body.style.overflow = showAnimation ? "auto" : "hidden";
  }, [showAnimation]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <main className="min-h-screen text-[#d0d0c0]" onClick={()=>setIsAudioPlaying(true)}>
          {/* Custom Cursor */}
          {/* <div className="xl:inline hidden cursor-dot w-5 h-5 bg-white fixed rounded-full pointer-events-none"></div>
          <div className="xl:inline hidden cursor-outline w-10 h-10 border border-gold fixed rounded-full pointer-events-none transition-all duration-75"></div> */}
    
          {/* Loading Screen */}
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center transition-transform duration-[1500ms] ease-in-out ${
              showAnimation ? "-translate-y-full" : "translate-y-0"
            }`}
            style={{
              zIndex: 100,
              // borderBottomLeftRadius: borderRadius,
              // borderBottomRightRadius: borderRadius,
              // transitionProperty: "transform, border-radius",
            }}
          >
            <h1 className="text-5xl text-center tracking-wider animate-pulse">
              • {languages[currentLangIndex]} •
            </h1>
          </div>
    
          {/* Main Content */}
          <NavBar isAudioPlaying={isAudioPlaying} setIsAudioPlaying={setIsAudioPlaying} />
          <UglyHero />
          <About />
          <Features />
          {/* <Story /> */}
          <Contact />
          <Footer />
        </main>
        </>
        }/>
        <Route path="/about" element={
          <>
          <NavBar />
          <About />
          <Footer/>
          </>
        }/>
        <Route path="/events" element={
          <>
          <NavBar />
          < Features/>
          <Footer/>
          </>
        }/>
        <Route path="/contact" element={
          <>
          <NavBar />
          <Contact />
          <Footer/>
          </>
        }/>
        <Route path='/events/techthesis' element={
          <TechThesis />
        }/>
        <Route />
        <Route path='/events/techtrek' element={
          <TechTrek />
        }/>
        <Route />

      </Routes>
    </Router>
  );
}

export default App;
