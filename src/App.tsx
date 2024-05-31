import EnterprisePage from "./pages/enterprise";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layouts/Layout";
function App() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="" element={<EnterprisePage />} />
          <Route path="enterprise" element={<EnterprisePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
