import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "./adminnavbar.css";

export default function AdminNavbar() {
  const [extendedBtn, setExtendedBtn] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div
      className="navbar-container"
      style={
        extendedBtn
          ? { height: "100vh", overflow: "hidden" }
          : { height: "60px" }
      }
    >
      <div className="navbar-inner-container">
        <div className="left-navbar">
          <Link to="/dashboard" className="logo-text">
            GRACE<span>SOFT</span>
          </Link>
        </div>
        <div className="right-navbar">
          <div className="links-container">
            <Link to="/" className="text-link">
              Home
            </Link>
            <Link to="/" className="text-link">
              Pages
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
      {extendedBtn && (
        <div className="extended-container">
          <Link to="/" className="text-link">
            Home
          </Link>
          <Link to="/" className="text-link">
            Pages
          </Link>

          <Link to="/user" className="text-link">
            {user.name}
          </Link>
        </div>
      )}
    </div>
  );
}
