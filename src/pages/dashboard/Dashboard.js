import "./dashboard.css";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <h2>Gracesoft</h2>
        <div className="search">
          <input type="text" placeholder="search..." />
        </div>
        <div className="rightHeader">
          <span>
            Welcome <b>{user.name}</b>
          </span>

          <button
            onClick={() => {
              setUser({ isLoggedIn: false, name: null });
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Dashboard Page</h2>
        <div className="row">
          <div className="col-2">column one</div>
          <div className="col-2">column two</div>
          <div className="col-3">column two</div>
          <div className="col-4">column two</div>
          <div className="col-5">column five</div>
        </div>
      </div>
    </>
  );
}
