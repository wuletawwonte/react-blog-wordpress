import axios from 'axios';
import {useState, useEffect} from 'react';
import Article from '../article/Article';
import './blogs.css';

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('/wp-json/wp/v2/posts?_embed')
            .then((res) => {
                setBlogs(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <div className="blogsContainer">
            {blogs.length !== 0 ? blogs.map((blog) => {
                return <div key={blog.id}>
                    <h2>{blog.title.rendered}</h2>
                    <Article blog={blog}/>
                </div>;
            }) : <h2>Loading...</h2>}
            
        </div>
    )
}
