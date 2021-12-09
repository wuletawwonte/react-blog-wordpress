
import { useState, useEffect } from "react";
import axios from "axios";
import "./post.css";
import Editor from "../editor/Editor";

export default function Post(props) {
  const { title, excerpt, featured_image_url, author_id } = props;
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
      axios(`/wp-json/wp/v2/users/${author_id}`)
        .then((res) => {
            setAuthorData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
  }, [author_id])

  return (
    <div className="post-container">
      <img src={featured_image_url} alt={title} className="post-img-content"  />
      <div className="post-text-content">
        <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
        <p dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 150) }}></p>
        {authorData ? <Editor editorData={authorData} /> : ""}
      </div>
    </div>
  );
}
