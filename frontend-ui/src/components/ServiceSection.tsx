export default function ServiceSection() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid md:grid-cols-4 gap-6 text-center">
        {["Custom Sites", "E-Commerce", "Landing Pages", "SEO"].map(service => (
          <div key={service} className="bg-white rounded shadow p-4">
            <h3 className="font-semibold">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
