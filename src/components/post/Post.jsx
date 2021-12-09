
import "./post.css";

export default function Post(props) {
  const { title, excerpt, featured_image_url } = props;
  return (
    <div className="post-container">
      <img src={featured_image_url} alt={title} className="post-img-content"  />
      <div className="post-text-content">
        <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
        <p dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 150) }}></p>
      </div>
    </div>
  );
}
