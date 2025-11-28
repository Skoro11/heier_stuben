import { useState } from "react";
import { Link } from "react-router-dom";
import { TextAlignJustify, X } from "lucide-react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-10 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto  px-4 xl:px-0 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              loading="lazy"
              src="/modern.jpg"
              alt="Heier Stuben Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          <li>
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-gray-600 transition"
            >
              Startseite
            </Link>
          </li>
          <li>
            <Link
              to="/#menu"
              className="hover:text-gray-600 transition"
              onClick={(e) => {
                e.preventDefault(); // prevent default jump
                const el = document.getElementById("menu");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false); // if mobile
              }}
            >
              Speisekarte
            </Link>
          </li>
          <li>
            <Link
              to="/#location"
              className="hover:text-gray-600 transition"
              onClick={(e) => {
                e.preventDefault(); // prevent default jump
                const el = document.getElementById("location");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false); // if mobile
              }}
            >
              Standort
            </Link>
          </li>
          <li>
            <Link
              to="/#reserve"
              onClick={(e) => {
                e.preventDefault(); // prevent default jump
                const el = document.getElementById("reserve");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false); // if mobile
              }}
              className="bg-[var(--beige-color)] 
              text-[var(--brown-color)] 
              font-semibold 
              py-3 px-6 
  rounded-full 
  shadow-md 
  hover:shadow-lg 
  transition-all 
  duration-300 
  focus:outline-none 
  focus:ring-2 
  focus:ring-[var(--brown-color)]
  inline-block"
            >
              Tisch reservieren
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <TextAlignJustify className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-800 font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-gray-600 w-full block "
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Startseite
              </Link>
            </li>
            <li>
              <Link
                to="/#menu"
                className="hover:text-gray-600 transition w-full block"
                onClick={(e) => {
                  e.preventDefault(); // prevent default jump
                  const el = document.getElementById("menu");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false); // if mobile
                }}
              >
                Speisekarte
              </Link>
            </li>
            <Link
              to="/#location"
              className="hover:text-gray-600 transition w-full block"
              onClick={(e) => {
                e.preventDefault(); // prevent default jump
                const el = document.getElementById("location");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false); // if mobile
              }}
            >
              Standort
            </Link>
            <Link
              to="/#footer"
              className="hover:text-gray-600 transition w-full block"
              onClick={(e) => {
                e.preventDefault(); // prevent default jump
                const el = document.getElementById("footer");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false); // if mobile
              }}
            >
              Öffnungszeiten
            </Link>
            <li>
              <Link
                to="/"
                className="hover:text-gray-600 transition bg-red-0 w-full block"
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Tisch reservieren
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
