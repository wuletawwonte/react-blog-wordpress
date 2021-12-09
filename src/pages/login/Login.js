import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useFormik } from "formik";
import UserContext from "../../context/UserContext";
import axios from "axios";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values, {setErrors, resetForm}) => {
      axios
        .post("/wp-json/jwt-auth/v1/token", {
          username: values.username,
          password: values.password,
        })
        .then((res) => {
          if (res.status === 200) {
            resetForm();
            setUser({ isLoggedIn: true, name: res.data.user_display_name, nice_name: res.data.user_nicename });
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          console.log(JSON.stringify(err));
          setErrors({ formError: err.message });
          // resetForm();
        });
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
            {formik.errors.formError ? (
              <div className="errorContainer">{formik.errors.formError}</div>
            ) : null}
            <div className="inputContainer">
              <input              
                name="username"
                className="username"
                type="text"
                placeholder="User name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="errorContainer">{formik.errors.username}</div>
              ) : null}
            </div>
            <div className="inputContainer">
              <input
                name="password"
                className="password"
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="errorContainer">{formik.errors.password}</div>
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
    errors.username = "Please enter your Username";
  }

  if (!values.password) {
    errors.password = "Please enter your Password";
  }

  return errors;
};
