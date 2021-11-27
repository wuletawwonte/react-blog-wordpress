import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="mainContainer">
      <div className="leftSide">
        <div className="leftInside">
          <h1>Welcome to the User Login Area</h1>
          <p>To request website Design just call us using these phone numbers</p>
          <div className="phoneNumbers">
            <h2>+251 926 350413</h2>
            <h2>+251 926 350413</h2>
          </div>
          <Link to="/" className="linkToHome">Back to Home</Link>
        </div>
      </div>
      <div className="rightSide">
        <h2>Signin here</h2>
      </div>
    </div>
  );
}
