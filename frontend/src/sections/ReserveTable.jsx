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
            {isOpen ? "Open Now" : "Closed"}
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6">Reserve a Table</h2>
        <p className=" mb-6">
          To reserve a table, please call us directly. Our team will be happy to
          assist you.
          <span className="block mt-2 text-gray-500">
            *Please call us during the restaurant's working hours; otherwise, we
            may not be able to take your call.
          </span>
        </p>

        <a
          href="tel:+491234567890"
          className="inline-block bg-black text-white hover:text-(--brown-color) font-semibold px-8 py-4 rounded-xl text-lg hover:bg-(--beige-color) transition"
        >
          📞 Call Now: +49 123 456 7890
        </a>
      </div>
    </section>
  );
}
