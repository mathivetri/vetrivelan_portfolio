import React from "react";

export default function Skills() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4" id="skills">
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Languages</h3>
          <ul className="flex flex-wrap gap-2 mb-4">
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">Java (Intermediate)</li>
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">C (Intermediate)</li>
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">Python</li>
          </ul>
          <h3 className="font-semibold mb-2">Databases</h3>
          <ul className="flex flex-wrap gap-2 mb-4">
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">MySQL (Intermediate)</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Tools & IDEs</h3>
          <ul className="flex flex-wrap gap-2 mb-4">
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">Eclipse</li>
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">NetBeans</li>
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">VSCode</li>
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">MySQL Workbench</li>
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">XAMPP</li>
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">Microsoft Excel (Expert)</li>
          </ul>
          <h3 className="font-semibold mb-2">Other</h3>
          <ul className="flex flex-wrap gap-2">
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">GitHub</li>
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">Canva</li>
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">Figma</li>
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">Photoshop</li>
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">Final Cut Pro</li>
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">Pycharm</li>
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">DSA</li>
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">Software Development</li>
            <li className="bg-blue-100 text-blue-900 px-3 py-1 rounded">Video Editing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}