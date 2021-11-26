import "./article.css";
// import Editor from "../../components/editor/Editor";
import {useEffect, useState} from 'react';
import axios from 'axios';

export default function Article(props) {
  const {title, featured_image_url, excerpt, author} = props.blog;
  const [authorData, setAuthorData] = useState({});

  useEffect(() => {
    axios.get("/wp-json/wp/v2/users/" + author)
      .then((res) => {
        console.log(res.data);
        setAuthorData({
          isLoading: true,
          data: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [author]);

  return (
    <>
      {featured_image_url ? (
        <img
          className="articleImage"
          src={featured_image_url}
          alt="title.rendered"
        />
      ) : (
        ""
      )}
      <h2
        dangerouslySetInnerHTML={{ __html: title.rendered }}
      ></h2>
      <p
        dangerouslySetInnerHTML={{
          __html: excerpt.rendered.substring(0, 150),
        }}
      ></p>
      {authorData.isLoading ? authorData.data.name : 'Loading' } 
      {/* <Editor editorId={author} /> */}
    </>
  );
}
