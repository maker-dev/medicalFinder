import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ListProductPage from "./Pages/ListProductPage";
import ListPharmacyPage from "./Pages/ListPharmacyPage";
import AdminDashboard from './Pages/admin/Dashboard.jsx';
import { useLayoutEffect } from "react";
import { ToastContainer } from 'react-toastify';
import ErrorPage from "./Pages/ErrorPage";
import Auth from "./global/Auth";
import ProductPage from "./Pages/ProductPage.jsx";
import AdminRoutes from "./protectedRoutes/AdminRoutes.js";
import GuestRoutes from './protectedRoutes/GuestRoutes';
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css';  
import PharmacyPage from "./Pages/PharmacyPage.jsx";

function App() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="pt-16 md:pt-20">
      <Auth>
        <Routes>
          <Route exact path="/" element={<Navigate to={"/home"} />}  />
          <Route exact path="/home" element={<HomePage />}/>
          <Route element={<GuestRoutes />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUpPage />} />
          </Route>
          <Route path="/products" element={<ListProductPage />} />
          <Route path="/pharmacies" element={<ListPharmacyPage />} />
          <Route element={<AdminRoutes />}>
            <Route path="/dashboard" element={<AdminDashboard />} />
          </Route>
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/pharmacy/:id" element={<PharmacyPage />} /> 
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <ToastContainer />
      </Auth>
    </div>

  );
}

export default App;
