import axios from "axios";
import { useState, useEffect } from "react";
import Article from "../article/Article";
import "./blogs.css";

export default function Blogs() {    
  const [blogs, setBlogs] = useState({});

  useEffect(() => {
    axios
      .get("/wp-json/wp/v2/posts?per_page=8")
      .then((res) => {
        setBlogs({ 
            data: res.data, 
            isLoaded: true 
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="blogsContainer">
      {blogs.isLoaded ? (
        blogs.data.map((blog) => {            
          return (
            <div className="article" key={blog.id}>
              <Article blog={blog} />
            </div>
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
