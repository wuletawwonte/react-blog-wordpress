import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "./adminnavbar.css";

export default function AdminNavbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        <div className="left-navbar">
            <Link to="/dashboard" className="logo-text">Gracesoft</Link>
        </div>
        <div className="right-navbar">
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
          <button className="hidden-menu-btn">&#8801;</button>
        </div>
      </div>
      <div className="extended-container"></div>
    </div>
  );
}
