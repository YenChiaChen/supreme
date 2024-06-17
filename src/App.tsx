import EnterprisePage from "./pages/enterprise";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TalentDevelopment from "./pages/enterprise/TalentDevelopment";
import Layout from "./components/layouts/Layout";
import HumanRightsPolicy from "./pages/enterprise/HumanRightsPolicy";
import OccupationalSafety from "./pages/enterprise/OccupationalSafety";
import HealthyWorkplace from "./pages/enterprise/HealthyWorkplace";
import ScrollToTop from "./components/utils/ScrollToTop";
import SustainabilityPage from "./pages/sustainability";
import Governance from "./pages/sustainability/Governance";
import GovernanceStructure from "./pages/sustainability/GovernanceStructure";
import InformationSecurity from "./pages/sustainability/InformationSecurity";
import IntellectualProperty from "./pages/sustainability/IntellectualProperty";
import RiskManagement from "./pages/sustainability/RiskManagement";
import SupplyChain from "./pages/sustainability/SupplyChain";
import MaintainPage from "./pages/maintain";
import EnergyManagement from "./pages/symbiosis/EnergyManagement";
import LandingPage from "./pages/landing";
function App() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="enterprise" element={<EnterprisePage />} />
          <Route path="enterprise/talent-development" element={<TalentDevelopment />} />
          <Route path="enterprise/human-rights-policy" element={<HumanRightsPolicy />} />
          <Route path="enterprise/occupational-safety" element={<OccupationalSafety />} />
          <Route path="enterprise/healthy-workplace" element={<HealthyWorkplace />} />
          <Route path="sustainability" element={<SustainabilityPage />} />
          <Route path="sustainability/governance" element={<Governance />} />
          <Route path="sustainability/governance-structure" element={<GovernanceStructure />} />
          <Route path="sustainability/intellectual-property" element={<IntellectualProperty />} />
          <Route path="sustainability/risk-management" element={<RiskManagement />} />
          <Route path="sustainability/information-security" element={<InformationSecurity />} />
          <Route path="sustainability/supply-chain" element={<SupplyChain />} />
          <Route path="esg" element={<MaintainPage />} />
          <Route path="esg/*" element={<MaintainPage />} />
          <Route path="society" element={<MaintainPage />} />
          <Route path="society/*" element={<MaintainPage />} />
          <Route path="symbiosis" element={<MaintainPage />} />
          <Route path="symbiosis/energy-management" element={<EnergyManagement />} />
          <Route path="symbiosis/*" element={<MaintainPage />} />



        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
