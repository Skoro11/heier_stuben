import { CategorySlider } from "../components/CategorySlider";
import { Menu } from "../components/Menu";
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
            <Menu
              key={category.name}
              category={category.name}
              categoryItems={category.items}
            />
          ))}
        </>
      ) : (
        <>
          {searchResults.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start border-b border-gray-200 py-4"
            >
              <div>
                <p className="font-bold text-lg">{item?.name || ""}</p>
                <p className="text-gray-700">{item?.description || ""}</p>
              </div>
              <p className="font-semibold text-lg">{item?.price || ""}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
}
