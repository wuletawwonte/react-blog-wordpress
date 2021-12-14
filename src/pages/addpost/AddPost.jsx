import "./addpost.css";
import { Formik } from "formik";

export default function AddPost() {
    return (
        <div className="add-post-container">
            <div className="add-post-header">
                <h2>Add Post</h2>
            </div>
            <Formik
                initialValues={{ title: "", content: "" }}
                validate={(values) => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = "Post title is required";
                    }
                    if (!values.content) {
                        errors.content =
                            "The content of a post cannot be empty";
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className="add-post-form">
                        <input
                            type="text"
                            name="title"
                            className="title-input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                            placeholder="title ..."
                        />
                        {touched.title && errors.title ? <span style={{color: 'red'}}>{errors.title}</span>: ''}
                        <textarea
                            type="text"
                            name="content"
                            className="content-input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.content}
                            rows="5"
                            placeholder="content ..."
                        />
                        {touched.content && errors.content ? <span style={{color: 'red'}}>{errors.content}</span> : ''}
                        <button type="submit" className="add-post-btn" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
