"use client";

export default function ContactSection() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <input className="w-full border p-2 rounded" placeholder="Name" />
        <input className="w-full border p-2 rounded" placeholder="Email" />
        <textarea className="w-full border p-2 rounded" placeholder="Message" rows={4}></textarea>
        <button className="bg-blue-600 text-white py-2 px-4 rounded w-full">Send</button>
      </form>
    </section>
  );
}
