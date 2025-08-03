import React from "react";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Vetrivelan Karmegam</h1>
          <p className="text-lg mb-4">
            Computer Science Student | Software Developer | AI &amp; Web Enthusiast
          </p>
          <div className="flex items-center gap-4 mb-4">
            <a href="mailto:vetrivelankarmegam@gmail.com" className="underline hover:text-blue-200">vetrivelankarmegam@gmail.com</a>
            <span>|</span>
            <a href="tel:+919003867641" className="underline hover:text-blue-200">+91 9003867641</a>
            <span>|</span>
            <span>Cuddalore, India</span>
          </div>
          <div className="flex gap-4 mb-4">
            <a href="https://www.linkedin.com/in/vetrivelan-karmegam/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl hover:text-blue-300" />
            </a>
            <a href="https://github.com/mathivetri" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-2xl hover:text-blue-300" />
            </a>
            <a href="/Vetri_CV.pdf" download className="ml-4 px-4 py-2 bg-white text-blue-900 font-semibold rounded shadow flex items-center gap-2 hover:bg-blue-100" title="Download Resume">
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}