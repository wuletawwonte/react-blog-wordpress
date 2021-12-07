import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function AdminNavbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/user">{user.name}</Link>
      <button
        onClick={() => {
          setUser({ isLoggedIn: false, name: null });
          navigate("/login");
        }}
      >
        Logout
      </button>
    </nav>
  );
}
