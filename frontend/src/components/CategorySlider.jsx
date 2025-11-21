import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import menuItems from "../data/menu.json";
import { NotebookText } from "lucide-react";
import { useState } from "react";
import { Search } from "lucide-react";
export function CategorySlider() {
  const sets = [];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  menuItems.forEach((item) => {
    if (!sets.includes(item.category)) {
      sets.push(item.category);
    } else {
      return;
    }
  });

  const settings = {
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280, // screens <= 1280px
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // screens <= 1024px
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // screens <= 768px
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 400, // very small screens
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
    ],
  };

  function scrollToCategory(categoryName) {
    const category = document.getElementById(categoryName);
    if (category) {
      category.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  function scrollToCategoryMobile(categoryName) {
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
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
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
                      scrollToCategoryMobile(category);
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
