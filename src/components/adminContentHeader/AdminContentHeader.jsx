import "./admincontentheader.css";
import { Link } from "react-router-dom";


export default function AdminContentHeader() {

  return (
    <div className="main-content-header">
      <h3>All Posts posted either via wordpress or gracesoft</h3>
      <div className="admin-header-menu-container">
          <ul className="admin-header-menu">
              <li><Link to="/" className="header-link">Posts</Link></li>
              <li><Link to="/" className="header-link">Devotion</Link></li>
              <li><Link to="/" className="header-link">Announcement</Link></li>
              <li><Link to="/" className="header-link">News</Link></li>
          </ul>
      </div>
    </div>
  );
}
