import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/common/GlobalStyle";
import HomePage from "./pages/HomePage";
import QuotePage from "./pages/QuotePage";
import LinksPage from "./pages/LinksPage";
import ConstructionHomePage from "./pages/construction/ConstructionHomePage";
import VerticalPage from "./pages/construction/VerticalPage";
import ProjectsPage from "./pages/construction/ProjectsPage";
import AboutPage from "./pages/construction/AboutPage";
import ContactPage from "./pages/construction/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/links" element={<LinksPage />} />

        {/* Construction vertical */}
        <Route path="/construction" element={<ConstructionHomePage />} />
        <Route path="/construction/civil-construction" element={<VerticalPage slug="civil-construction" />} />
        <Route
          path="/construction/prefabricated-buildings"
          element={<VerticalPage slug="prefabricated-buildings" />}
        />
        <Route
          path="/construction/sports-infrastructure"
          element={<VerticalPage slug="sports-infrastructure" />}
        />
        <Route path="/construction/projects" element={<ProjectsPage />} />
        <Route path="/construction/about" element={<AboutPage />} />
        <Route path="/construction/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
