import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../../components/post/Post";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import "./dashboard.css";
import Menu from "../../components/menu/Menu";
import SideMenuUser from "../../components/sideMenuUser/SideMenuUser";
import AdminContentHeader from "../../components/adminContentHeader/AdminContentHeader";

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
            <SideMenuUser />
            <Menu />
          </div>
          <div className="item main-content">
            <AdminContentHeader />
            {posts.isLoaded
              ? posts.data.map((post) => {
                  return (
                    <div key={post.id}>
                      <Post
                        featured_image_url={post.featured_image_url}
                        title={post.title.rendered}
                        excerpt={post.excerpt.rendered}
                        author_id={post.author}
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
