import React from "react";

const certs = [
  { title: "Java", org: "Appin Technology (offline training – Coimbatore)" },
  { title: "Python", org: "Kaggle, Infosys-SpringBoard, Guvi" },
  { title: "Machine Learning", org: "FreeCodeCamp, Udemy" },
  { title: "HTML and CSS", org: "Udemy" },
];

export default function Certifications() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4" id="certifications">
      <h2 className="text-2xl font-bold mb-6">Certifications</h2>
      <div className="flex flex-col gap-4">
        {certs.map((c, idx) => (
          <div key={idx} className="bg-white rounded shadow p-4">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-gray-600">{c.org}</p>
          </div>
        ))}
      </div>
    </section>
  );
}