import { Link } from "react-router-dom";
import { hoursGr } from "../utils/openHours";

export function Footer() {
  return (
    <footer className="bg-black text-white py-10" id="footer">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Opening hours */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Öffnungszeiten</h3>
          <ul>
            {Object.entries(hoursGr).map(([day, time]) => (
              <li key={day} className="flex justify-between">
                <span>{day}</span>
                <span>{time ? `${time[0]} - ${time[1]}` : "Geschlossen"}</span>
              </li>
            ))}
          </ul>

          <div className="md:hidden mt-2 text-white text-sm space-y-1">
            <p>
              *Die Küche ist sonntags und an Feiertagen bis 20:00 Uhr geöffnet,
              sonst bis 21:00 Uhr.
            </p>
            <p>*Das Restaurant öffnet an Feiertagen bereits um 11:30 Uhr.</p>
          </div>
        </div>

        {/* Rechtliches */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Rechtliches</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/legal"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-gray-600 transition"
              >
                Datenschutzerklärung
              </Link>
            </li>
            <li>
              <Link
                to="/legal"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-gray-600 transition"
              >
                Impressum
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
          <ul className="flex flex-col gap-1 text-gray-300">
            <a
              href="tel:+492264 6644"
              className="hover:text-gray-600 transition"
            >
              +49 2264 6644
            </a>
            <li>Etilena Tolo</li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Restaurant+Heier+Stuben+Marienheide+Leppestrasse+7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition"
              >
                Marienheide 51709, Leppestraße 7
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-6 text-sm">
        &copy; {new Date().getFullYear()} Heier Stuben. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
