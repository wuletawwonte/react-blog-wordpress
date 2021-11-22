import axios from 'axios';
import {useState, useEffect} from 'react';

export default function Home() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('/wp-json/wp/v2/posts')
            .then((res) => {
                setBlogs(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <div>
            {blogs.length !== 0 ? blogs.map((blog) => {
                return <div key={blog.id}>
                    <h2>{blog.title.rendered}</h2>
                </div>;
            }) : <h2>Loading...</h2>}
        </div>
    )
}
