
export default function Article(props) {
    const article = props.blog;
    return (
        <div>
            <img src={article.featured_image_url} style={{height: 150}} />
            {props.blog.title.rendered}
        </div>
    )
}
