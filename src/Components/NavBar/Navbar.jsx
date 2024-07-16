import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
import appLogo from "../../Assets/Constructionbase.png";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    const navbarLinks = document.querySelector(".navbar-links");
    navbarLinks.classList.toggle("active");
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar sticky-top">
      <div className="navbar-container">
        <Link to="/">
          <img src={appLogo} alt="#" className="logo" />
        </Link>
        <ul className="navbar-links">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/rentalSale">Rental & Sale</Link>
          </li>
          <li className="nav-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/services">Services</Link>
          </li>
        </ul>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="navbar-toggle" onClick={toggleNavbar}>
            {isOpen ? (
              <span className="menu">
                <ImMenu3 />
              </span>
            ) : (
              <span className="menu">
                <ImMenu4 />
              </span>
            )}
          </div>
          <div className="user-container">
            <Link to="/user">
              <div className="settings">
                <span style={{ textDecoration: "none", color: "#fff" }}>
                  <MdAdminPanelSettings />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
