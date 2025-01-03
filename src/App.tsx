import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import MainContent from "./components/layout/MainContent";
import { EmployeesPage } from "./pages/EmployeesPage";
import { ProductsPage } from "./pages/ProductsPage";

function App() {
  return (
    <MainContent>
      <Routes>
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/" element={<Navigate to={"/employees"} replace />} />
      </Routes>
    </MainContent>
  );
}

export default App;
