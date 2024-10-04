import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NewsPage from "./pages/NewsPage";
import Layout from "./components/ui/Layout";
import ScrollToTop from "./components/utils/scrollToTop";
import SocietyPage from "./pages/SocietyPage";
import NewsDetail from "./pages/NewsPage/NewsLayout";
import SurveyPage from "./pages/SurveyPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import EnterprisePage from "./pages/EnterprisePage";
import SymbiosisPage from "./pages/SymbiosisPage";
import MessageFromChairmain from "./pages/SustainabilityPage/MessageFromChairmain";
import Governance from "./pages/SustainabilityPage/Governance";
import EthicalManagement from "./pages/SustainabilityPage/EthicalManagement";
import Board from "./pages/SustainabilityPage/Board"
import SustainbilityCommittee from "./pages/SustainabilityPage/SustainbilityCommittee";
import CompensationCommittee from "./pages/SustainabilityPage/CompensationCommittee";
import AuditCommittee from "./pages/SustainabilityPage/AuditCommittee";
import StakeholderEngagement from "./pages/SustainabilityPage/StakeholderEngagement";
import KeyTopic from "./pages/SustainabilityPage/KeyTopic";
import IntellectualProperty from "./pages/SustainabilityPage/IntellectualProperty";
import RiskManagement from "./pages/SustainabilityPage/RiskManagement";
import InformationSecurity from "./pages/SustainabilityPage/InformationSecurity";
import SupplyChain from "./pages/SustainabilityPage/SupplyChain";
import ProductCustomerService from "./pages/SustainabilityPage/ProductCustomerService";
import HRDistribution from "./pages/EnterprisePage/HRDistribution";
import WelfareCare from "./pages/EnterprisePage/WelfareCare";
import RightsProtection from "./pages/EnterprisePage/RightsProtection";
import DiverseGrowth from "./pages/EnterprisePage/DiverseGrowth";
import HumanRightsPolicy from "./pages/EnterprisePage/HumanRightsPolicy";
import OccupationalSafety from "./pages/EnterprisePage/OccupationalSafety";
import HealthyWorkplace from "./pages/EnterprisePage/HealthyWorkplace";
import PerformanceCompensation from "./pages/EnterprisePage/PerformanceCompensation";
import ClimateChange from "./pages/SymbiosisPage/ClimateChange";
import EnergyManagement from "./pages/SymbiosisPage/EnergyManagement";
import GreenEnergy from "./pages/SymbiosisPage/GreenEnergy";
import GreenhouseGases from "./pages/SymbiosisPage/GreenhouseGases";
import WasteManagement from "./pages/SymbiosisPage/WasteManagement";
import WaterManagement from "./pages/SymbiosisPage/WaterManagement";
import './i18n'

function App() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:id" element={<NewsDetail />} />
          <Route path="society" element={<SocietyPage />} />
          <Route path="sustainability" element={<SustainabilityPage />} />
          <Route path="sustainability/message-from-chairman" element={<MessageFromChairmain />} />
          <Route path="sustainability/governance" element={<Governance />} />
          <Route path="sustainability/ethical-management" element={<EthicalManagement />} />
          <Route path="sustainability/board" element={<Board />} />
          <Route path="sustainability/survey" element={<SurveyPage />} />
          <Route path="sustainability/sustainbility-committee" element={<SustainbilityCommittee />} />
          <Route path="sustainability/compensation-committee" element={<CompensationCommittee />} />
          <Route path="sustainability/audit-committee" element={<AuditCommittee />} />
          <Route path="sustainability/stakeholder-engagement" element={<StakeholderEngagement />} />
          <Route path="sustainability/intellectual-property" element={<IntellectualProperty />} />
          <Route path="sustainability/risk-management" element={<RiskManagement />} />
          <Route path="sustainability/information-security" element={<InformationSecurity />} />
          <Route path="sustainability/supply-chain" element={<SupplyChain />} />
          <Route path="sustainability/product-customer-service" element={<ProductCustomerService />} />
          <Route path="sustainability/key-topics" element={<KeyTopic />} />
          <Route path="enterprise" element={<EnterprisePage />} />
          <Route path="enterprise/hr-distribution" element={<HRDistribution />} />
          <Route path="enterprise/welfare-care" element={<WelfareCare />} />
          <Route path="enterprise/rights-protection" element={<RightsProtection />} />
          <Route path="enterprise/diverse-growth" element={<DiverseGrowth />} />
          <Route path="enterprise/human-rights-policy" element={<HumanRightsPolicy />} />
          <Route path="enterprise/occupational-safety" element={<OccupationalSafety />} />
          <Route path="enterprise/healthy-workplace" element={<HealthyWorkplace />} />
          <Route path="enterprise/performance-compensation" element={<PerformanceCompensation />} />
          <Route path="symbiosis" element={<SymbiosisPage />} />
          <Route path="symbiosis/climate-change" element={<ClimateChange />} />
          <Route path="symbiosis/energy-management" element={<EnergyManagement />} />
          <Route path="symbiosis/green-energy" element={<GreenEnergy />} />
          <Route path="symbiosis/greenhouse-gases" element={<GreenhouseGases />} />
          <Route path="symbiosis/waste-management" element={<WasteManagement />} />
          <Route path="symbiosis/water-management" element={<WaterManagement />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
