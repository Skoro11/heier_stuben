import { Link } from "react-router-dom";

const hours = {
  Monday: ["17:00", "23:00"],
  Tuesday: ["17:00", "23:00"],
  Wednesday: null,
  Thursday: ["17:00", "23:00"],
  Friday: ["17:00", "23:00"],
  Saturday: ["17:00", "23:00"],
  Sunday: ["11:00", "22:00"],
};

export function Footer() {
  return (
    <footer className="bg-black text-white py-10" id="footer">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Opening hours */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Öffnungszeiten</h3>
          <ul>
            {Object.entries(hours).map(([day, time]) => (
              <li key={day} className="flex justify-between">
                <span>{day}</span>
                <span>{time ? `${time[0]} - ${time[1]}` : "Geschlossen"}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rechtliches */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Rechtliches</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/legal"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:underline"
              >
                Datenschutzerklärung
              </Link>
            </li>
            <li>
              <Link
                to="/legal"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:underline"
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
            <li>0123 456789</li>
            <li>Marienheide 51709, Leppestrasse 7</li>
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
