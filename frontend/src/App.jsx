import "./index.css";
import Navbar from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Menu } from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
} from "./data/menuSorted";
import { ReserveTable } from "./components/ReserveTable";
import { CategorySlider } from "./components/CategorySlider";
import { About } from "./sections/About";
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
];
function App() {
  return (
    <BrowserRouter>
      <div className="pb-17">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto px-2 md:px-6 ">
        <Routes>
          <Route
            path="/menu"
            element={
              <>
                <CategorySlider />
                {allCategories.map((category) => (
                  <Menu
                    key={category.name}
                    category={category.name}
                    categoryItems={category.items}
                  />
                ))}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Banner />
                <ReserveTable />
                <About />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
