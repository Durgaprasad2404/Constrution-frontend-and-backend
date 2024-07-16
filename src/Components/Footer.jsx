import React, { useRef } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { MdVerticalAlignTop } from "react-icons/md";
import { Link } from "react-router-dom";
import appLogo from "../Assets/Constructionbase.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxvDOCESfb3QuCffK7LrSNNetTlZkg9kh3Gqhsnr1PoHsGzQihP0jTkHZjUWq-4ExjkqA/exec";
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((response) => {
        alert("Thank you! Your name is submitted successfully on.");
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  };
  return (
    <>
      <div className="text-center sticky-bottom mt-3">
        <button onClick={scrollToTop} className="back-btn">
          <i>
            <MdVerticalAlignTop />
          </i>
        </button>
      </div>
      <hr />
      <footer>
        <div className="footCon1">
          <img src={appLogo} alt="#" className="logofoot mb-3" />
          <p>Your one-stop shop for the tools that build tomorrow.</p>
        </div>
        <div className="footCon2">
          <ul className="footlist">
            <Link style={{ textDecoration: "none", color: "#000" }} to="/">
              <li className="footlistItem">Home</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/rentalSale"
            >
              <li className="footlistItem">Rental & Sale</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/products"
            >
              <li className="footlistItem">Products</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/services"
            >
              <li className="footlistItem">Services</li>
            </Link>
          </ul>
        </div>
        <div className="footCon3">
          <b>Contact Us</b>
          <br />
          <form ref={formRef} name="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Let me know you name"
            />
            <button
              type="submit"
              name="submit"
              value="submit"
              className="border p-1 my-1"
            >
              contact
            </button>
          </form>
          <div className="connect">
            <i>Connect With Us</i>
            <br />
            <span className="icon">
              <FaWhatsappSquare />
            </span>
            <span className="icon">
              <FaFacebookSquare />
            </span>
            <span className="icon">
              <FaYoutubeSquare />
            </span>
            <span className="icon">
              <FaTwitterSquare />
            </span>
            <span className="icon">
              <FaInstagramSquare />
            </span>
          </div>
        </div>
      </footer>
      <div className="copyright">2024 | GSR MEDIA @copyright</div>
    </>
  );
}

export default Footer;
