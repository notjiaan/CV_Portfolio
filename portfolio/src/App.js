import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./section/Homepage";
import About from "./section/About";
import Skills from "./section/Skills";
import Project from "./section/Project";
import Contact from "./section/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <>
      <div className="portfolio">
        <NavBar />
        <Homepage />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop smooth top="800" />
    </>
  );
}

export default App;
