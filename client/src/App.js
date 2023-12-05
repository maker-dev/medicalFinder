import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage  from "./Pages/SignUpPage";
import ListProductPage from "./Pages/ListProductPage";
import PharmacyPage from "./Pages/PharmacyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/home' element={<HomePage />}/>
          <Route exact path='/' element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/products" element={<ListProductPage />} />
          <Route path="/pharmacies" element={<PharmacyPage/>} />
          {/* <Route path="/product/:id" element={<ProductPage product={product} />} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
