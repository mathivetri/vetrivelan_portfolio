import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    // Here you should integrate with an email service or backend to send the message.
  }

  return (
    <section className="max-w-3xl mx-auto py-12 px-4" id="contact">
      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border rounded px-3 py-2"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border rounded px-3 py-2"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="border rounded px-3 py-2 h-28"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-900 text-white font-semibold px-6 py-2 rounded hover:bg-blue-800 transition"
          disabled={sent}
        >
          {sent ? "Message Sent!" : "Send Message"}
        </button>
      </form>
    </section>
  );
}