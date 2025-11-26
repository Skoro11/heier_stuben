import { HeroSection } from "../sections/HeroSection";
import { ReserveTable } from "../sections/ReserveTable";
import { About } from "../sections/About";
import { MenuSwiper } from "../sections/MenuSwiper";
export function LandingPage() {
  return (
    <>
      <HeroSection />
      <ReserveTable />

      <About />
      <MenuSwiper />
      <section
        id="location"
        className="scroll-mt-20 max-w-7xl mx-auto px-4  pb-16 md:space-y-20 mt-0"
      >
        <div className="hidden md:block text-center text-3xl font-bold">
          Where to find us
        </div>

        <div className="flex flex-col md:flex-row items-center md:gap-8  md:mt-0">
          {/* Left side: text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 mt-4 md:mt-0">
              In the Heart of Marienheide
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mt-8 md:mt-0">
              Our restaurant is nestled in the heart of Marienheide, offering a
              cozy atmosphere and exceptional cuisine. We’ve been welcoming
              locals and visitors alike, providing memorable dining experiences
              with a touch of tradition and warmth.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Come by to enjoy great food, friendly service, and a charming
              setting that makes every meal special.
            </p>
          </div>

          {/* Right side: map */}
          <div className="md:w-1/2 h-96 w-full rounded-xl overflow-hidden shadow-lg mt-8 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.3917285207176!2d7.527141912854569!3d51.0827777716019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47becae9c621084b%3A0xbe8d1206e69e84f!2sRestaurant%20Heier%20Stuben%20Inh.%20Etilena%20Tolo!5e0!3m2!1sen!2sde!4v1763997101319!5m2!1sen!2sde"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
