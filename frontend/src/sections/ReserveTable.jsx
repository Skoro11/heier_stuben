import { OpenStatus } from "../components/OpenStatus";
export function ReserveTable() {
  return (
    <section id="reserve" className=" scroll-mt-15 py-8 md:py-16 ">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="md:hidden flex items-center justify-center mb-4 gap-2">
          <OpenStatus />
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
          href="tel:+4922646644"
          className="inline-block bg-black text-white hover:text-(--brown-color) font-semibold px-8 py-4 rounded-xl text-lg hover:bg-(--beige-color) transition"
        >
          📞 Jetzt Anrufen: +49 2264 6644
        </a>
      </div>
    </section>
  );
}
