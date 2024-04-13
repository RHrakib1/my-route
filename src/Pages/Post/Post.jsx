import { Link } from "react-router-dom";

const Post = ({ post1 }) => {
    const { id, title, body } = post1;
    const postStyle = {
        border: "3px solid green",
        padding: "10px",
        borderRadious: "20px"
    }
    return (
        <div style={postStyle}>
            <h2>ID : {id}</h2>
            <h2>Title :{title} </h2>
            <small>Body :{body} </small>
            <Link to={`/post1/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;