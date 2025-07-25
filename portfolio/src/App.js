import React from "react";
import CustomNavbar from "./components/Navbar";
import Spotlight from "./components/Spotlight";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import BackgroundOverlay from "./components/BackgroundOverlay";

function App() {
  return (
    <div>
      <BackgroundOverlay />
      <CustomNavbar />
      <Spotlight />
      <About />
      <Skills />
      <Projects />
      {/* Placeholder sections */}
      <section id="about" className="p-5">
        About Section
      </section>
      <section id="projects" className="p-5 bg-light">
        Projects Section
      </section>
      <section id="career" className="p-5">
        Career Journey Section
      </section>
      <section id="blog" className="p-5 bg-light">
        Blog Section
      </section>
      <section id="contact" className="p-5">
        Contact Section
      </section>

      <Footer />
    </div>
  );
}

export default App;
