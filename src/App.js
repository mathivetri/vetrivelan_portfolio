import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Certifications from "./components/Certifications";
import SoftSkills from "./components/SoftSkills";
import AdditionalInfo from "./components/AdditionalInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <Header />
      <main>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Internships />
        <Certifications />
        <SoftSkills />
        <AdditionalInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;