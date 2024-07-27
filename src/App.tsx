import EnterprisePage from "./pages/enterprise";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TalentDevelopment from "./pages/enterprise/TalentDevelopment";
import Layout from "./components/layouts/Layout";
import HumanRightsPolicy from "./pages/enterprise/HumanRightsPolicy2";
import OccupationalSafety from "./pages/enterprise/OccupationalSafety2";
import HealthyWorkplace from "./pages/enterprise/HealthyWorkplace2";
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
import Board from "./pages/sustainability/Board";
import KeyTopics from "./pages/sustainability/KeyTopics";
import CompensationCommittee from "./pages/sustainability/CompensationCommittee";
import SustainabilityCommittee from "./pages/sustainability/SustainabilityCommittee";
import AuditCommittee from "./pages/sustainability/AuditCommittee";
import ProductCustomerService from "./pages/sustainability/ProductCustomerService";
import StakeholderEngagement from "./pages/sustainability/StakeholderEngagement";
import SymbiosisPage from "./pages/symbiosis";
import ClimateChange from "./pages/symbiosis/ClimateChange";
import GreenhouseGases from "./pages/symbiosis/GreenhouseGases";
import WasteManagement from "./pages/symbiosis/WasteManagement";
import WaterManagement from "./pages/symbiosis/WaterManagement";
import GreenEnergy from "./pages/symbiosis/GreenEnergy";
import MessageFromChairmain from "./pages/sustainability/MessageFromChairmain";
import HRDistribution from "./pages/enterprise/HRDistribution";
import WelfareCare from "./pages/enterprise/WelfareCare";
import RightsProtection from "./pages/enterprise/RightsProtection";
import DiverseGrowth from "./pages/enterprise/DiverseGrowth";
import PerformanceCompensation from "./pages/enterprise/PerformanceCompensation";
import EthicalManagement from "./pages/sustainability/EthicalManagement";
import Test from "./pages/maintain/test";

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
          <Route path="enterprise/hr-distribution" element={<HRDistribution />} />
          <Route path="enterprise/welfare-care" element={<WelfareCare />} />
          <Route path="enterprise/rights-protection" element={<RightsProtection />} />
          <Route path="enterprise/diverse-growth" element={<DiverseGrowth />} />
          <Route path="enterprise/performance-compensation" element={<PerformanceCompensation />} />
          <Route path="enterprise/*" element={<MaintainPage />} />
          <Route path="sustainability" element={<SustainabilityPage />} />
          <Route path="sustainability/governance" element={<Governance />} />
          <Route path="sustainability/governance-structure" element={<GovernanceStructure />} />
          <Route path="sustainability/intellectual-property" element={<IntellectualProperty />} />
          <Route path="sustainability/risk-management" element={<RiskManagement />} />
          <Route path="sustainability/information-security" element={<InformationSecurity />} />
          <Route path="sustainability/supply-chain" element={<SupplyChain />} />
          <Route path="sustainability/board" element={<Board />} />
          <Route path="sustainability/key-topics" element={<KeyTopics />} />
          <Route path="sustainability/compensation-committee" element={<CompensationCommittee />} />
          <Route path="sustainability/sustainbility-committee" element={<SustainabilityCommittee />} />
          <Route path="sustainability/audit-committee" element={<AuditCommittee />} />
          <Route path="sustainability/product-customer-service" element={<ProductCustomerService />} />
          <Route path="sustainability/stakeholder-engagement" element={<StakeholderEngagement />} />
          <Route path="sustainability/message-from-chairman" element={<MessageFromChairmain />} />
          <Route path="sustainability/ethical-management" element={<EthicalManagement />} />

          <Route path="sustainability/*" element={<MaintainPage />} />
          <Route path="esg" element={<MaintainPage />} />
          <Route path="esg/*" element={<MaintainPage />} />
          <Route path="society" element={<MaintainPage />} />
          <Route path="society/*" element={<MaintainPage />} />
          <Route path="symbiosis" element={<SymbiosisPage />} />
          <Route path="symbiosis/energy-management" element={<EnergyManagement />} />
          <Route path="symbiosis/water-management" element={<WaterManagement />} />
          <Route path="symbiosis/waste-management" element={<WasteManagement />} />
          <Route path="symbiosis/climate-change" element={<ClimateChange />} />
          <Route path="symbiosis/greenhouse-gases" element={<GreenhouseGases />} />
          <Route path="symbiosis/green-energy" element={<GreenEnergy />} />
          <Route path="symbiosis/*" element={<MaintainPage />} />
          <Route path="news/*" element={<MaintainPage />} />



        </Route>
        <Route path="/test" element={<Test />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
