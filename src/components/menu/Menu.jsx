import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/dashboard" className="menu-item-link menu-active">
            Dashboard
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/" className="menu-item-link">
            Add Post
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/" className="menu-item-link">
            Pages
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/" className="menu-item-link">
            Settings
          </Link>
        </li>
      </ul>
    </>
  );
}
