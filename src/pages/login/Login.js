import { Link } from "react-router-dom";
import "./login.css";
import { useFormik } from "formik";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
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
          <form onSubmit={formik.handleSubmit}>
            <div className="inputContainer">
              <input
                id="username"
                name="username"
                className="username"
                type="text"
                placeholder="User name"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              {formik.errors.username ? (
                <div>{formik.errors.username}</div>
              ) : null}
            </div>
            <div className="inputContainer">
              <input
                id="password"
                name="password"
                className="password"
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <input className="loginButton" type="submit" value="Login" />
          </form>
          <p>Forgot Password?</p>
        </div>
      </div>
    </div>
  );
}

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};
