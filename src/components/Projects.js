import React from "react";

const projects = [
  {
    title: "ChatBot",
    date: "Sep 2023 – Nov 2023",
    description: "A chatbot designed to interact with users for casual conversation.",
    tools: ["Python"],
  },
  {
    title: "Online Course Reservation System",
    date: "Feb 2024 – Mar 2024",
    description: "Web-based platform in Java to manage course enrollment for students and teachers.",
    tools: ["Java", "XAMPP"],
  },
];

export default function Projects() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4" id="projects">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white rounded shadow p-4 flex flex-col">
            <h3 className="font-semibold text-lg">{proj.title}</h3>
            <span className="text-gray-600 text-sm mb-2">{proj.date}</span>
            <p className="mb-2">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {proj.tools.map((tool) => (
                <span key={tool} className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-sm">{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}