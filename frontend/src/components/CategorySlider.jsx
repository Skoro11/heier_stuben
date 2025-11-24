import { menuItems } from "../data/menu.js";
import { NotebookText } from "lucide-react";
import { useState } from "react";
import { Search } from "lucide-react";
import { useMenu } from "../hooks/MenuState.jsx";
import { useEffect } from "react";
export function CategorySlider() {
  const sets = [];
  const { menuState, setMenuState, searchResults, setSearchResults } =
    useMenu();

  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollTo, setScrollTo] = useState(null);
  menuItems.forEach((item) => {
    if (!sets.includes(item.category)) {
      sets.push(item.category);
    } else {
      return;
    }
  });

  useEffect(() => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        const timer = setTimeout(() => {
          setScrollTo(null); // reset after scrolling
        }, 0);
        return () => clearTimeout(timer);
      }
    }
  }, [scrollTo, menuState]);

  function handleSearch(query) {
    if (!query.length == 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const filtered = menuItems.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      setMenuState("search");
    } else {
      setMenuState("main");
    }
  }
  function scrollToCategory(categoryName) {
    const category = document.getElementById(categoryName);
    if (category) {
      category.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
  function ShowCategories() {
    setIsMenuOpen((prev) => !prev);
  }
  return (
    <section className=" sticky top-17 bg-white">
      <nav className="block ">
        <div className="py-5 flex items-center gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
            <Search
              onClick={() => handleSearch(searchQuery)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            />
          </div>
          <button
            onClick={() => ShowCategories()}
            className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-md flex items-center justify-center"
          >
            <NotebookText />
          </button>
        </div>

        {isMenuOpen ? (
          <div className="w-full  mx-auto mt-4">
            <div className="font-semibold text-lg mb-2 text-gray-700">
              Categories
            </div>
            <ul className="bg-white shadow-md rounded-xl overflow-y-auto max-h-80 md:max-h-120 divide-y divide-gray-200">
              {sets.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setMenuState("main");
                      setSearchResults([]);
                      setScrollTo(category);
                      ShowCategories();
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-blue-50 focus:outline-none focus:bg-blue-50 transition-colors"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </section>
  );
}
