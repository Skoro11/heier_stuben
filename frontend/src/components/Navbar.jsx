import { useState } from "react";
import { Link } from "react-router-dom";
import { TextAlignJustify, X } from "lucide-react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-10 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/hs-logo.png"
              alt="Heier Stuben Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          <li>
            <Link to="/" className="hover:text-gray-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-gray-600 transition">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-600 transition">
              Reserve a Table
            </Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-600 transition">
              Contact
            </a>
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
                className="hover:text-gray-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="menu"
                className="hover:text-gray-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <a
                href="#reserve"
                className="hover:text-gray-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Reserve a Table
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
