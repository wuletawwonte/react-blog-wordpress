import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="mainContainer">
      <div className="leftSide">
        <div className="leftInside">
          <h1>Welcome to the User Login Area</h1>
          <p>
            To request website Design just call us using these phone numbers
          </p>
          <div className="phoneNumbers">
            <h2>+251 926 350413</h2>
            <h2>+251 926 350413</h2>
          </div>
          <Link to="/" className="linkToHome">
            Back to Home
          </Link>
        </div>
      </div>
      <div className="rightSide">
        <div className="rightInside">
          <h2>Signin here</h2>
          <p>Please enter your username and password</p>
          <form>
            <div className="inputContainer">
              <input className="username" type="text" placeholder="User name" />
            </div>
            <div className="inputContainer">
              <input className="password" type="password" placeholder="Password"/>
            </div>
            <input className="loginButton" type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}
