
export default function Post(props) {
    const {title, excerpt} = props;
    return (
        <div>
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
            <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>            
        </div>
    )
}
