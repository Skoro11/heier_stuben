export function About() {
  return (
    <section className="lg:max-w-7xl mx-auto   md:pb-20  space-y-12 lg:space-y-">
      <h1 className="text-center text-3xl font-bold">About us</h1>

      {/* Row 1 */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:px-4">
        <div className="md:w-1/3 flex justify-center max-h-70 md:max-h-200">
          <img
            src="pic.jpg"
            alt="Events"
            className=" w-full md:max-w-sm md:rounded-xl shadow-lg object-top md:object-contain object-cover  "
          />
        </div>

        <div className="md:w-2/3 px-4">
          <h2 className="text-3xl font-bold mb-4">Events & Celebrations</h2>
          <div className="text-gray-700 text-lg leading-relaxed space-y-4">
            <p>
              We make every occasion special. From birthdays to funerals,
              anniversaries, or family gatherings, we provide the perfect
              atmosphere for memorable experiences.
            </p>

            <p>
              Our team handles decoration, menu planning, and on-site
              coordination so you can focus on enjoying the moment. Whether
              you're hosting an intimate event for close friends or a larger
              celebration, we tailor every detail to fit your needs.
            </p>

            <p className="hidden lg:block">
              Customers trust us because we combine great food, warm
              hospitality, and a space that adapts to any style of celebration.
              We also offer additional services, such as themed décor,
              customized menus, and entertainment options to make your event
              truly unforgettable.
            </p>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row items-center gap-12 ">
        <div className="md:w-1/3 md:order-2 flex justify-center max-h-70 md:max-h-200 md:mr-4">
          <img
            src="owners.jpg"
            alt="Events"
            className=" w-full md:max-w-sm md:rounded-xl shadow-lg object-top md:object-contain object-cover  "
          />
        </div>

        <div className="md:w-2/3 md:order-1 px-4">
          <h2 className="text-3xl font-bold mb-4">Our Owners</h2>
          <div className="text-gray-700 text-lg leading-relaxed space-y-4">
            <p>
              For over a decade, our owners have poured their energy into
              creating a place that feels familiar the moment you walk in. Their
              hands-on approach ensures that quality never slips—whether it's a
              friendly greeting, a perfectly cooked dish, or the calming
              atmosphere that defines our space.
            </p>

            <p>
              Their philosophy is simple: treat every guest like a long-time
              friend. This mindset is what keeps people returning year after
              year.
            </p>

            <p className="hidden lg:block">
              Beyond hospitality, they continuously look for ways to improve the
              experience, from menu innovations to enhancing the ambiance. Their
              dedication has earned them loyal customers and a reputation for
              exceptional service.
            </p>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center max-h-70 md:max-h-200 md:ml-4 lg:ml-0">
          <img
            src="bowlin.jpg"
            alt="Events"
            className=" w-full md:max-w-sm md:rounded-xl shadow-lg transform -scale-x-100 object-center md:object-contain object-cover  "
          />
        </div>

        <div className="md:w-2/3 px-4">
          <h2 className="text-3xl font-bold mb-4">Kegelbahn</h2>
          <div className="text-gray-700 text-lg leading-relaxed space-y-4 max-w-3xl">
            <p>
              Our Kegelbahn is one of the highlights of our establishment.
              Modern lanes, professional lighting, and a cozy seating area make
              it the perfect spot for fun nights, team-building events, or
              friendly family competitions.
            </p>

            <p>
              We maintain the lanes regularly to ensure smooth play, and our
              staff is always available to help set up games or provide
              equipment. Pair it with your favorite drinks or a full meal for
              the ideal evening out.
            </p>

            <p className="hidden lg:block">
              Whether you're hosting a birthday celebration, planning a casual
              get-together, or just looking to try something new, our Kegelbahn
              provides an experience that’s both entertaining and relaxing. Many
              of our regular guests say it's their go-to activity whenever they
              visit us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
