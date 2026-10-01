import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/common/GlobalStyle";
import HomePage from "./pages/HomePage";
import QuotePage from "./pages/QuotePage";
import LinksPage from "./pages/LinksPage";
import GymEquipmentPage from "./pages/GymEquipmentPage";
import HashScrollHandler from "./components/common/HashScrollHandler";
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
     <HashScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/gym-equipment-in-lucknow" element={<GymEquipmentPage />}
/>
      </Routes>
    </BrowserRouter>
  );
}
