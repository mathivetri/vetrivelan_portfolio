import React from "react";

export default function Education() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4" id="education">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold text-lg">Bachelor of Engineering in Computer Science</h3>
          <p>Anna University Regional Campus Coimbatore</p>
          <p className="text-gray-600 text-sm">10/2021 – 07/2025 | CGPA: 7.69 / Percentage: 77%</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold text-lg">Higher Secondary Certificate (HSC)</h3>
          <p>Vidya Mandir Matric Hr Sec School</p>
          <p className="text-gray-600 text-sm">94.8%</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold text-lg">SSLC</h3>
          <p>Sathya Saai Matric Hr Sec School</p>
          <p className="text-gray-600 text-sm">93.8%</p>
        </div>
      </div>
    </section>
  );
}