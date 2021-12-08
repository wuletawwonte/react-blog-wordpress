import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "./adminnavbar.css";

export default function AdminNavbar() {
  const [extendedBtn, setExtendedBtn] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(extendedBtn);

  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        <div className="left-navbar">
          <Link to="/dashboard" className="logo-text">
            Gracesoft
          </Link>
        </div>
        <div className="right-navbar">
          <div className="links-container">
            <Link to="/" className="text-link">
              Home
            </Link>
            <Link to="/user" className="text-link">
              {user.name}
            </Link>
            <button
              onClick={() => {
                setUser({ isLoggedIn: false, name: null });
                navigate("/login");
              }}
              className="logout-btn"
            >
              Logout
            </button>
          </div>
          <button
            className="hidden-menu-btn"
            onClick={() => {
              setExtendedBtn((curr) => !curr);
            }}
          >
            {extendedBtn ? <>&#10005;</> : <>&#8801;</>}
          </button>
        </div>
      </div>
      <div className="extended-container"></div>
    </div>
  );
}