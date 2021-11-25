import './editor.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Editor(props) {
    const editorId = props.editorId;
    const [editor, setEditor] = useState({});
    useEffect(() => {
        axios.get('/wp-json/wp/v2/users/'+editorId)
            .then((res) => {
                setEditor(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });
    return (
        <>
            {JSON.stringify(editor) === '{}' ? <div className="editorContainer">
            <p>{editor.name}</p>            
            </div> : "loading"}
        </>
    )
}
