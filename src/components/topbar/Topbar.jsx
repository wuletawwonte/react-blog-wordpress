import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
          <Link to="/" className="logo">
        <span>
          <b>Grace</b>
          <i>soft</i>
        </span>
        </Link>
      </div>
      <div className="topbarCenter">
        <span className="callUsPhone">Call Us: +251926350413</span>
        <span className="callUsSeparator"> / </span>
        <span className="callUsEmail">hello@gracesoft.net</span>
      </div>
      <div className="topbarRight">
        <div className="topbarLoginLink">
          <Link to="/login" className="loginLink">
            <span>Login</span>
          </Link>
        </div>
        <div className="topbarSubscribeBtn">
          <button className="subscribeBtn">Subscribe to our blog</button>
        </div>
        <div className="topbarLinks">
          <span className="topbarLink">Menu</span>
        </div>
      </div>
    </div>
  );
}
