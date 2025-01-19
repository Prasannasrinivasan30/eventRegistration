import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [hover, setHover] = useState(false);
  function toggleHover() {
    setHover(true);
  }

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden"
    onClick={toggleHover}
    >
      <NavBar hover={hover} setHover={setHover}/>
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
