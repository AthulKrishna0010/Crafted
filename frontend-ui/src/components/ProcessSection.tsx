"use client";
export default function ProcessSection() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
      <div className="flex flex-col md:flex-row justify-around gap-4">
        {["Consult", "Design", "Build", "Launch"].map((step, index) => (
          <div key={step} className="bg-white p-4 rounded shadow text-center">
            <div className="text-2xl font-bold mb-2">{index+1}</div>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
