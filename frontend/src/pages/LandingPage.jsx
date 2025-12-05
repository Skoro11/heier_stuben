import { HeroSection } from "../sections/HeroSection";
import { ReserveTable } from "../sections/ReserveTable";
import { About } from "../sections/About";
import { MenuSwiper } from "../sections/MenuSwiper";
import { useState } from "react";
export function LandingPage() {
  const [loaded, setLoaded] = useState(false);

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
          So finden Sie uns
        </div>

        <div className="flex flex-col md:flex-row items-center md:gap-8  md:mt-0">
          {/* Left side: text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 mt-4 md:mt-0">
              Im Herzen von Marienheide
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mt-8 md:mt-0">
              {" "}
              Unser Restaurant liegt im Herzen von Marienheide und bietet eine
              gemütliche Atmosphäre sowie hervorragende Küche. Wir heißen sowohl
              Einheimische als auch Besucher herzlich willkommen und sorgen für
              unvergessliche kulinarische Erlebnisse mit einem Hauch von
              Tradition und Herzlichkeit.{" "}
            </p>{" "}
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              {" "}
              Besuchen Sie uns, um exzellentes Essen, freundlichen Service und
              ein charmantes Ambiente zu genießen, das jedes Mahl zu etwas
              Besonderem macht.{" "}
            </p>
          </div>

          {/* Right side: map */}
          <div className="md:w-1/2 h-96 w-full rounded-xl overflow-hidden shadow-lg mt-8 md:mt-0 bg-gray-400 bg-cover">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.3917285207176!2d7.527141912854569!3d51.0827777716019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47becae9c621084b%3A0xbe8d1206e69e84f!2sRestaurant%20Heier%20Stuben%20Inh.%20Etilena%20Tolo!5e0!3m2!1sen!2sde!4v1763997101319!5m2!1sen!2sde"
              className={`w-full h-full border-0 transition-opacity duration-700 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              allowFullScreen
              loading="lazy"
              onLoad={() => setLoaded(true)}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
