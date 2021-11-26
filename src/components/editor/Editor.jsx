import "./editor.css";

export default function Editor(props) {
  const { avatar_urls, name } = props.editorData;
  return (
    <div className="editorContainer">
        <img src={avatar_urls['48']} alt={name} />
        <p>{name}</p>
    </div>
  );
}
