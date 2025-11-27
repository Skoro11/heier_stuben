import "./index.css";
import Navbar from "./sections/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { Footer } from "./sections/Footer";
import LegalPage from "./pages/LegalPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="pb-19">
        <Navbar />
      </div>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
