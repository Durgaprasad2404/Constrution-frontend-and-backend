import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader/Loader";
import URL_FOR_API from "./API/Database";

function RegisterPage() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    Username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isStrongPassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Username, email, password } = formData;

    // Basic validation
    if (!Username || !email || !password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    // Password strength validation
    if (!isStrongPassword(password)) {
      setErrorMsg(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    // Clear error message if validation passed
    setErrorMsg("");

    try {
      setIsLoading(true);
      const res = await fetch(URL_FOR_API + "/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      window.alert("Registration succeeded");
      setSuccessMsg("Registration successful!");
      history("/login");

      // Clear form fields after successful registration
      setFormData({
        Username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMsg(error.message || "Registration failed");
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  return (
    <div className="register-form">
      {isLoading && <Loader />}
      <h2>Register</h2>
      <form onSubmit={handleSubmit} method="POST">
        {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>}
        {successMsg && <div style={{ color: "green" }}>{successMsg}</div>}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="Username"
            value={formData.Username}
            onChange={handleInputChange}
            autoComplete="true"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="true"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="true"
              required
            />
            <i
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </i>
          </div>
        </div>
        <button type="submit">Register</button>
        <p>
          If registered?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
