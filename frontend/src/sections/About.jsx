export function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:pb-16 md:space-y-20">
      <div className="text-center text-3xl font-bold ">About us</div>
      {/* Row 1: Birthdays, Burials, etc. */}
      <div className="flex flex-col md:flex-row items-center gap-8 mt-8 md:mt-0">
        <div className="md:w-1/2">
          <img
            src="chairs.jpg"
            alt="Events"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Events & Celebrations</h2>
          <p className="text-gray-700 text-lg leading-relaxed mt-8 md:mt-0">
            We make every occasion special. From birthdays to funerals,
            anniversaries, or family gatherings, we provide the perfect
            ambiance, delicious food, and attentive service to ensure your event
            is unforgettable.
          </p>
        </div>
      </div>

      {/* Row 2: Owners */}
      <div className="flex flex-col md:flex-row items-center gap-8 mt-8 md:mt-0">
        <div className="md:w-1/2 md:order-2">
          <img
            src="https://placehold.co/600x400"
            alt="Owners"
            className="w-full h-full object-cover rounded-xl shadow-lg mt-8 md:mt-0"
          />
        </div>
        <div className="md:w-1/2 md:order-1">
          <h2 className="text-3xl font-bold mb-4 mt-8 md:mt-0">Our Owners</h2>
          <p className="text-gray-700 text-lg leading-relaxed mt-8 md:mt-0">
            For over 10 years, our owners have dedicated themselves to creating
            a welcoming atmosphere and providing high-quality service. Their
            passion for hospitality ensures every guest feels at home.
          </p>
        </div>
      </div>

      {/* Row 3: Kegelbahn */}
      <div className="flex flex-col md:flex-row items-center gap-8 mt-8 md:mt-0">
        <div className="md:w-1/2">
          <img
            src="bowling.jpg"
            alt="Kegelbahn"
            className="w-full h-full object-cover rounded-xl shadow-lg mt-8 md:mt-0"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 mt-8 md:mt-0">Kegelbahn</h2>
          <p className="text-gray-700 text-lg leading-relaxed mt-8 md:mt-0">
            Enjoy our modern Kegelbahn for a fun night with friends and family.
            Whether it’s a casual evening or a competitive game, our lanes are
            perfect for entertainment while you savor our food and drinks.
          </p>
        </div>
      </div>
    </section>
  );
}
