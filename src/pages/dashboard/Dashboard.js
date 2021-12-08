import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../../components/post/Post";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import "./dashboard.css";


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
        <h2>Dashboard Page</h2>
        <div className="row container">
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
