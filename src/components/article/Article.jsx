import './article.css';
import Editor from '../../components/editor/Editor';

export default function Article(props) {
    const singleArticle = props.blog;
    return (<>
            {singleArticle.featured_image_url ? <img className="articleImage" src={singleArticle.featured_image_url} alt="singleArticle.title.rendered" /> : ''}
            <h2 dangerouslySetInnerHTML={{__html: singleArticle.title.rendered}}></h2>
            <p dangerouslySetInnerHTML={{__html: singleArticle.excerpt.rendered.substring(0, 150)}}></p>
            <Editor editorId={singleArticle.author} />
            </>
    )
}
