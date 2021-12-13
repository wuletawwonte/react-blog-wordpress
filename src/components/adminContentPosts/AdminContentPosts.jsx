import "./admincontentposts.css";
import axios from "axios";
import { useState, useEffect } from 'react';
import Post from "../post/Post"; 

export default function AdminContentPosts(props) { 
    const activeCategory = props.category;   
    const [posts, setPosts] = useState({
        isLoaded: false,
        data: null,
        category: null,
    });

    useEffect(() => {
        axios(`/wp-json/wp/v2/posts${activeCategory ? `?categories=${activeCategory}` : ""}`)
            .then((res) => {
                setPosts({
                    isLoaded: true,
                    data: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, [activeCategory]);

    return (
        <div>
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
    );
}
