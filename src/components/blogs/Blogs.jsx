import axios from 'axios';
import {useState, useEffect} from 'react';
import Article from '../article/Article';
import './blogs.css';

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('/wp-json/wp/v2/posts?per_page=8')
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
                return <div className="article" key={blog.id}>
                    <Article blog={blog}/>
                </div>;
            }) : <h2>Loading...</h2>}
            
        </div>
    )
}
