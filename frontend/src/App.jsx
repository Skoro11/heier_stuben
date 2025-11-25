import "./index.css";
import Navbar from "./sections/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { MenuPage } from "./pages/MenuPage";
import { Footer } from "./sections/Footer";
import LegalPage from "./pages/LegalPage";

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
          <Route path="/legal" element={<LegalPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
