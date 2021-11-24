import './article.css';

export default function Article(props) {
    const article = props.blog;
    return (
        <div className="article">
            {article.featured_image_url ? <img className="articleImage" src={article.featured_image_url} alt="article.title.rendered" /> : ''}
            <h2 dangerouslySetInnerHTML={{__html: props.blog.title.rendered}}></h2>
            {article.featured_image_url ? '' :<p dangerouslySetInnerHTML={{__html: article.excerpt.rendered}}></p>}
        </div>
    )
}
