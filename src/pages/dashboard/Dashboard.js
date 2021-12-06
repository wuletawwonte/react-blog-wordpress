import "./dashboard.css";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router";
import axios from "axios";
import Post from "../../components/post/Post";

export default function Dashboard() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios
      .get("/wp-json/wp/v2/posts")
      .then((res) => {
        setPosts({ data: res.data, isLoaded: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <div className="col-3">column one</div>
          <div className="col-9">
            {posts.isLoaded
              ? posts.data.map((post) => {
                  return (
                    <div key={post.id}>
                      <Post title={post.title.rendered} excerpt={post.excerpt.rendered} />
                    </div>
                  );
                })
              : "Loading"}
          </div>
        </div>
      </div>
    </>
  );
}
