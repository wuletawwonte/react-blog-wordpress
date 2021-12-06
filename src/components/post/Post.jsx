
export default function Post(props) {
    const {title, excerpt} = props;
    return (
        <div>
            <h2>{title}</h2>
            <p>{excerpt}</p>            
        </div>
    )
}
