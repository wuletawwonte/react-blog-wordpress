import "./loading.css";

export default function Loading(props) {
    return (
        <div className="loading-container">
            <img className="loading" src={`/assets/img/${props.type}`} alt="loading" />            
        </div>
    )
}
