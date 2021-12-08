import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../../components/post/Post";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import "./dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
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
      <AdminNavbar />
      <div className="container">
        <div className="dashboard-container">
          <div className="item side-menu">
            <ul className="menu">
              <li className="menu-item">
                <Link to="/" className="menu-item-link">Dashboard</Link>
              </li>
              <li className="menu-item">
                <Link to="/" className="menu-item-link">Add Post</Link>
              </li>
              <li className="menu-item">
                <Link to="/" className="menu-item-link">Pages</Link>
              </li>
              <li className="menu-item">
                <Link to="/" className="menu-item-link">Settings</Link>
              </li>
            </ul>
          </div>
          <div className="item main-content">
            {posts.isLoaded
              ? posts.data.map((post) => {
                  return (
                    <div key={post.id}>
                      <Post
                        title={post.title.rendered}
                        excerpt={post.excerpt.rendered}
                      />
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
