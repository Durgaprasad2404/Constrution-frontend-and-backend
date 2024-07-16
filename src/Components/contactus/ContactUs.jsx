import React, { useRef, useState } from "react";
import "./contact.css";
import { FiSend } from "react-icons/fi";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import Loader from "../Loader/Loader";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxvDOCESfb3QuCffK7LrSNNetTlZkg9kh3Gqhsnr1PoHsGzQihP0jTkHZjUWq-4ExjkqA/exec";
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((response) => {
        alert("Thank you for contacting us.We will reachout you soon!");
        setIsLoading(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="contact-us">
      <div className="contactus-container">
        <h1>Contact Us</h1>
        <p>Get in touch and we'll get back to you as soon as possible.</p>
        <form ref={formRef} name="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              {" "}
              <FaUser className="me-2" />
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="me-2" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              <FaMessage className="me-2" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="message"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="conactus-button">
            <FiSend className="me-2" />
            Send Message
          </button>
        </form>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default ContactUs;
