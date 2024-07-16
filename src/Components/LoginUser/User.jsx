import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./user.css";
import Loader from "../Loader/Loader";
import URL_FOR_API from "../API/Database";

function User() {
  const history = useNavigate();
  const [userData, setUserData] = useState({});
  const [userState, setUserState] = useState("Login");
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    const jwtToken = Cookies.get("jwtoken");
    try {
      const res = await fetch(URL_FOR_API + "/api/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await res.json();
      setUserData(data);
      setUserState("Logout");
      setLoading(false);
    } catch (err) {
      console.error(err);
      history("/login");
    }
  };

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="userDetails">
      {loading ? (
        <Loader />
      ) : (
        <div className="userContainer">
          <div className="userDp">
            <FaUser />
          </div>
          <div className="userbio">
            <h3 className="username">
              Hey &#128075;,{" "}
              <span className="userName">{userData.Username}</span>
            </h3>
            <p className="greetingMsg">Good To See You Here &#128525;</p>
            <Link to="/logout" className="userStatus">
              {userState}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
