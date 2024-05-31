import EnterprisePage from "./pages/enterprise";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layouts/Layout";
function App() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="enterprise" element={<EnterprisePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
