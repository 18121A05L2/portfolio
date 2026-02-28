import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";
import BlockchainPage from "./pages/Blockchain";
import FullStackPage from "./pages/FullStack";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <BrowserRouter>
      <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <FadeIn transitionDuration={700}>
          <Routes>
            <Route path="/" element={<Navigate to="/blockchain" replace />} />
            <Route path="/blockchain" element={<BlockchainPage />} />
            <Route path="/fullstack" element={<FullStackPage />} />
          </Routes>
        </FadeIn>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;