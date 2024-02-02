import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import TrySection from "./components/TrySection";

function App() {

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Features/>
      <Testimonial/>
      <TrySection/>
      <Footer/>
    </div>
  );
}

export default App;
