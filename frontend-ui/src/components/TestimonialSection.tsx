export default function TestimonialSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="bg-white rounded shadow p-4 text-center max-w-sm mx-auto">
          “They made an amazing website for our business — highly recommended!”
          <p className="mt-2 font-bold">– Happy Client</p>
        </div>
      </div>
    </section>
  );
}
