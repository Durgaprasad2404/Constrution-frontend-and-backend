import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Loader from "./Loader/Loader";
import URL_FOR_API from "./API/Database";

function LoginPage() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    // Clear error message if validation passed
    setErrorMsg("");

    try {
      setIsLoading(true); // Show loader
      const res = await fetch(URL_FOR_API + "/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      Cookies.set("jwtoken", data.token, {
        expires: new Date(Date.now() + 25892000000),
      });
      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      window.alert("Login Success");
      setSuccessMsg("Login successful!");
      history("/user");

      // Clear form fields after successful login
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMsg(error.message || "Login failed");
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  return (
    <div className="loginBG">
      {isLoading && <Loader />}
      <div className="main">
        <h4>Enter your login credentials</h4>
        <form onSubmit={handleSubmit} method="POST" id="login">
          {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>}
          {successMsg && <div style={{ color: "green" }}>{successMsg}</div>}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="login-input"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoComplete="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                className="login-input"
                id="password"
                name="password"
                placeholder="Enter your Password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="true"
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
          <div className="wrap">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
        </form>
        <p>
          Not registered?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
