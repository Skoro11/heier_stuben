import { useState } from "react";
import { useMenu } from "../hooks/MenuState";
import {
  Suppen,
  WarmeVorspeisen,
  KleineGerichte,
  EtwasVegetarisches,
  VonDerPute,
  AusDemTopf,
  VomFisch,
  GerichteVomGrill,
  Pfannengerichte,
  EtwasSpezielles,
  VomSchwein,
  RumpsteakMitBeilagen,
  RumpsteakOhneBeilagen,
  Beilagen,
  Eis,
  AlkoholfreieGetraenke,
  HeisseGetraenke,
  Biere,
  Spirituosen,
  KroatischeSpirituosenspezialitaet,
  Wein,
} from "../data/menuSorted";
import { menuItems } from "../data/menu.js";
import { NotebookText } from "lucide-react";
import { Search } from "lucide-react";
import { useEffect } from "react";

const allCategories = [
  { name: "Suppen", items: Suppen },
  { name: "Warme Vorspeisen", items: WarmeVorspeisen },
  { name: "Kleine Gerichte", items: KleineGerichte },
  { name: "Etwas Vegetarisches", items: EtwasVegetarisches },
  { name: "Von der Pute", items: VonDerPute },
  { name: "Aus dem Topf", items: AusDemTopf },
  { name: "Vom Fisch", items: VomFisch },
  { name: "Gerichte vom Grill", items: GerichteVomGrill },
  { name: "Pfannengerichte", items: Pfannengerichte },
  { name: "Etwas Spezielles", items: EtwasSpezielles },
  { name: "Vom Schwein", items: VomSchwein },
  { name: "Rumpsteak mit Beilagen", items: RumpsteakMitBeilagen },
  { name: "Rumpsteak ohne Beilagen", items: RumpsteakOhneBeilagen },
  { name: "Beilagen", items: Beilagen },
  { name: "Eis", items: Eis },
  { name: "Alkoholfreie Getränke", items: AlkoholfreieGetraenke },
  { name: "Heiße Getränke", items: HeisseGetraenke },
  { name: "Biere", items: Biere },
  { name: "Spirituosen", items: Spirituosen },
  {
    name: "Kroatische Spirituosenspezialität",
    items: KroatischeSpirituosenspezialitaet,
  },
  { name: "Wein", items: Wein },
];
export function MenuPage() {
  const { menuState, searchResults } = useMenu();

  return (
    <>
      <CategorySlider />

      {menuState != "search" ? (
        <>
          {allCategories.map((category) => (
            <MenuItems
              key={category.name}
              category={category.name}
              categoryItems={category.items}
            />
          ))}
        </>
      ) : (
        <>
          {searchResults.length === 0 ? (
            <> No items</>
          ) : (
            searchResults.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-start border-b border-gray-100 py-5"
              >
                <div className="pr-6">
                  <p className="font-semibold text-xl text-gray-900">
                    {item?.name}
                  </p>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    {item?.description}
                  </p>
                </div>

                <p className="font-bold text-lg text-gray-800 whitespace-nowrap">
                  {item?.price}
                </p>
              </div>
            ))
          )}
        </>
      )}
    </>
  );
}

function MenuItems({ category, categoryItems, isTrue }) {
  return (
    <main id={category} className="bg-white py-4 scroll-mt-40 md:scroll-mt-40">
      <h2 className="text-3xl font-semibold mb-6 tracking-wide text-gray-900">
        {category}
      </h2>

      {categoryItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-start border-b border-gray-100 py-5"
        >
          <div className="pr-6">
            <p className="font-semibold text-xl text-gray-900 tracking-wide">
              {item?.name || ""}
            </p>

            <p className="text-gray-600 text-sm mt-1 leading-relaxed">
              {item?.description || ""}
            </p>
          </div>

          <p className="font-bold text-lg text-gray-800 whitespace-nowrap">
            {item?.price || ""}
          </p>
        </div>
      ))}

      {isTrue && (
        <p className="mt-6 text-gray-600 italic text-center">
          Zu allen Gerichten können Sie sich einen Salat vom Salatbüffet nehmen.
        </p>
      )}
    </main>
  );
}

function CategorySlider() {
  const sets = [];
  const { menuState, setMenuState, setSearchResults } = useMenu();

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
