import React from "react";

export default function SoftSkills() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4" id="softskills">
      <h2 className="text-2xl font-bold mb-6">Soft Skills</h2>
      <ul className="flex flex-wrap gap-3">
        <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">Problem-solving</li>
        <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">Team collaboration</li>
        <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">Communication</li>
        <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">Time management</li>
      </ul>
    </section>
  );
}