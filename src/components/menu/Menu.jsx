import { NavLink } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <>
      <ul className="menu">
        <li className="menu-item">
          <NavLink end to="/dashboard" className={(linkStatus) => {
            if(linkStatus.isActive) {
              return "menu-item-link menu-active";
            } else {
              return "menu-item-link";
            }
          }}>
            Dashboard
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/dashboard/addpost" className={(linkStatus) => {
            if(linkStatus.isActive) {
              return "menu-item-link menu-active";
            } else {
              return "menu-item-link";
            }
          }}>
            Add Post
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/" className="menu-item-link">
            Pages
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/" className="menu-item-link">
            Settings
          </NavLink>
        </li>
      </ul>
    </>
  );
}
