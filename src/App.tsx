import EnterprisePage from "./pages/enterprise";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TalentDevelopment from "./pages/enterprise/TalentDevelopment";
import Layout from "./components/layouts/Layout";
import HumanRightsPolicy from "./pages/enterprise/HumanRightsPolicy";
import OccupationalSafety from "./pages/enterprise/OccupationalSafety";
import HealthyWorkplace from "./pages/enterprise/HealthyWorkplace";
import ScrollToTop from "./components/utils/ScrollToTop";
function App() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="" element={<EnterprisePage />} />
          <Route path="enterprise" element={<EnterprisePage />} />
          <Route path="enterprise/talent-development" element={<TalentDevelopment />} />
          <Route path="enterprise/human-rights-policy" element={<HumanRightsPolicy />} />
          <Route path="enterprise/occupational-safety" element={<OccupationalSafety />} />
          <Route path="enterprise/healthy-workplace" element={<HealthyWorkplace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
