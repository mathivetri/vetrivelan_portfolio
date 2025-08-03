import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-blue-900 text-white">
      <img
        src="/profile.jpg"
        alt="Your Name"
        className="w-32 h-32 rounded-full border-4 border-white mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">Vetrivelan Karmegam</h1>
      <p className="text-xl font-medium mb-4">Your Professional Title Here</p>
      <p className="max-w-2xl text-center mb-6">
        Brief tagline or professional summary—what makes you stand out?
      </p>
      <div>
        <a
          href="#contact"
          className="bg-white text-blue-900 px-6 py-2 rounded shadow font-semibold mr-4"
        >
          Contact Me
        </a>
        <a
          href="/Vetri_CV.pdf"
          className="border border-white px-6 py-2 rounded font-semibold"
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}