import "./index.css";
import Navbar from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Menu } from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReserveTable } from "./components/ReserveTable";
import { CategorySlider } from "./components/CategorySlider";
import { About } from "./sections/About";
import { LandingPage } from "./pages/LandingPage";
import { MenuPage } from "./pages/MenuPage";

function App() {
  return (
    <BrowserRouter>
      <div className="pb-17">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto px-2 md:px-6 ">
        <Routes>
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
