import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import "./App.css";
import Home from "./Components/Home";
import RentedVehicles from "./Components/RentedVehicles";
import Equipment from "./Components/Equipment";
import ElectronicsElectrical from "./Components/Eelectrical";
import Building from "./Components/Building";
import ShowOwners from "./Components/rentalFolder/ShowOwners";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "./Components/Services";
import Showworkers from "./Components/serviceFolder/ShowServicers";
import PageNotFound from "./Components/PageNotFound";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import User from "./Components/LoginUser/User";
import Logout from "./Components/Logout";
import Products from "./Components/Product";
import SingleProduct from "./Components/productsDisplay/singleproduct";
import SaleVehicles from "./Components/SaleVehicles";
import Seller from "./Components/Sellers/Seller";
import Listedservices from "./Components/serviceFolder/Listedservices";
import Footer from "./Components/Footer";

function App() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollTop();
  });
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rentalSale" element={<RentedVehicles />} />
          <Route exact path="/Sales" element={<SaleVehicles />} />
          <Route exact path="/sales/:vehicle" element={<Seller />} />
          <Route exact path="/rental/:category" element={<ShowOwners />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/allservices" element={<Listedservices />} />
          <Route exact path="/services/:category" element={<Showworkers />} />
          {/* EquipmentRoute */}
          <Route exact path="/EquipmentItems" element={<Equipment />} />
          {/* ElectricalRoute */}
          <Route
            exact
            path="/Electrical_Electronic_Items"
            element={<ElectronicsElectrical />}
          />
          {/* BuildingEquipmentRoute */}
          <Route exact path="/buildingItem" element={<Building />} />
          <Route exact path="/product/:id" element={<SingleProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
