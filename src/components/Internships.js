import React from "react";

const internships = [
  {
    title: "Full Stack Development – ASP",
    date: "Jul 2024 – Aug 2024",
    description: "Created a responsive website for a manufacturing company using HTML, CSS, JavaScript, SQL Server.",
  },
  {
    title: "Python Programming",
    date: "Jul 2024 – Aug 2024",
    description: `Developed "rock paper scissors" game, contact manager, and to-do list using Python and VS Code.`,
  },
];

export default function Internships() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4" id="internships">
      <h2 className="text-2xl font-bold mb-6">Internships</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {internships.map((intern, idx) => (
          <div key={idx} className="bg-white rounded shadow p-4">
            <h3 className="font-semibold text-lg">{intern.title}</h3>
            <span className="text-gray-600 text-sm mb-2">{intern.date}</span>
            <p>{intern.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}