import { hours, isOpenNow } from "../utils/openHours";
import { useState, useEffect } from "react";
export function ReserveTable() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isOpenNow(hours));
  }, []);

  return (
    <section id="reserve" className=" scroll-mt-15 py-8 md:py-16 ">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="md:hidden flex items-center justify-center mb-4 gap-2">
          <span
            className={`w-3 h-3 rounded-full flex-shrink-0 ${
              isOpen ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
          <p className="font-semibold text-lg m-0">
            {isOpen ? "Geöffnet" : "Geschlossen"}
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6">Tisch Reservieren</h2>
        <p className="mb-6">
          Um einen Tisch zu reservieren, rufen Sie uns bitte direkt an. Unser
          Team hilft Ihnen gerne weiter.
          <span className="block mt-2 text-gray-500">
            *Bitte kontaktieren Sie uns während der Öffnungszeiten des
            Restaurants, da wir Ihren Anruf sonst möglicherweise nicht
            entgegennehmen können.
          </span>
        </p>

        <a
          href="tel:+49 2264 6644"
          className="inline-block bg-black text-white hover:text-(--brown-color) font-semibold px-8 py-4 rounded-xl text-lg hover:bg-(--beige-color) transition"
        >
          📞 Jetzt Anrufen: +49 2264 6644
        </a>
      </div>
    </section>
  );
}
