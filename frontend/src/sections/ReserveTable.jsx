export function ReserveTable() {
  return (
    <section id="reserve" className=" py-8 md:py-16 ">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Reserve a Table</h2>
        <p className="text-gray-700 mb-6">
          To reserve a table, please call us directly. Our team will be happy to
          assist you.
        </p>
        <a
          href="tel:+491234567890"
          className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          📞 Call Now: +49 123 456 7890
        </a>
      </div>
    </section>
  );
}
