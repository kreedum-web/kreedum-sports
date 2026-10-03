import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/common/GlobalStyle";
import HomePage from "./pages/HomePage";
import QuotePage from "./pages/QuotePage";
import LinksPage from "./pages/LinksPage";
import GymEquipmentPage from "./pages/GymEquipmentPage";
import HashScrollHandler from "./components/common/HashScrollHandler";
import GymSetupPage from "./pages/GymSetupPage";
import GymPackagesPage from "./pages/GymPackagesPage";
import GymPackageDetailPage from "./pages/GymPackageDetailPage";
import GymPackage175Page from "./pages/GymPackage175Page";
import GymPackage265Page from "./pages/GymPackage265Page";
import AboutUsPage from "./pages/AboutUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
     <HashScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/gym-equipment-in-lucknow" element={<GymEquipmentPage />}/>
        <Route path="/gym-setup-in-lucknow" element={<GymSetupPage />}/>
        <Route path="/gym-packages" element={<GymPackagesPage />}/>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />}/>
        <Route path="/gym-packages/10-lakh-gym-package" element={<GymPackageDetailPage />}/>
        <Route path="/gym-packages/17-5-lakh-gym-package" element={<GymPackage175Page />}/>
        <Route path="/gym-packages/26-5-lakh-gym-package" element={<GymPackage265Page />}/>
      </Routes>
    </BrowserRouter>
  );
}
