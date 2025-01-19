import About from "./components/About";
import UglyHero from "./components/UglyHero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

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
    if (currentLangIndex < languages.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentLangIndex((prevIndex) => prevIndex + 1);
      }, 170);
      return () => clearTimeout(timeout); // Cleanup timeout
    } else {
      const timeout = setTimeout(() => {
        setShowAnimation(true);
      }, 1000);
      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [currentLangIndex]);

  return (
    <>
    <section
        className={`bg-black h-screen w-screen absolute z-[100] text-[#d0d0c0] font-circular-web text-3xl flex gap-3 items-center justify-center transition-all duration-1000 ${
          showAnimation ? "-top-[100%]" : "top-0"
        }`}
      >
        <p>
          {languages[currentLangIndex]} 
        </p>
        <p>
          {"<3"}
        </p>
      </section>
    <main
      className="relative min-h-screen w-screen overflow-x-hidden "
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
