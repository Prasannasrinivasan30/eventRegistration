import { useEffect, useState } from "react";
import About from "./components/About";
import UglyHero from "./components/UglyHero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [hover, setHover] = useState(false);
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const languages = [
    'Hello', 'Hola', 'Bonjour', 'Hallo', 'Ciao', '你好', 'こんにちは', '안녕하세요',
    'Привет', 'Olá', 'سلام', 'Habari', 'שָׁלוֹם',
    'မင်္ဂလာပါ', 'Xin chào', 'Aloha', 'नमस्ते', 'こんにちは', 'வணக்கம்',
  ];

  function toggleHover() {
    setHover(true);
  }

  useEffect(() => {
    // Disable scrolling on page load
    document.body.style.overflow = "hidden";

    // Reset scroll position to the top on page load
    window.scrollTo(0, 0);

    if (currentLangIndex < languages.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentLangIndex((prevIndex) => prevIndex + 1);
      }, 170);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setShowAnimation(true);
        // Enable scrolling after animation
        document.body.style.overflow = "auto";
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentLangIndex]);

  return (
    <>
      {/* Loading Screen */}
      <section
        className={`absolute z-[200] flex items-center justify-center gap-3 h-screen w-screen transition-all duration-1000 bg-black text-3xl text-[#d0d0c0] font-circular-web ${
          showAnimation ? "-top-full" : "top-0"
        }`}
      >
        <p>{languages[currentLangIndex]}</p>
        <p>...</p>
      </section>

      {/* Main Content */}
      <main
        className="relative min-h-screen w-screen overflow-x-hidden"
        onClick={toggleHover}
      >
        <NavBar hover={hover} setHover={setHover} />
        <UglyHero />
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
