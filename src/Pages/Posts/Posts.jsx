import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import "./Posts.css"

const Posts = () => {
    const Posts = useLoaderData();
    return (
        <div>
            <h2>Post : {Posts.length}</h2>

            <div className="Posts">
                {
                    Posts.map(post=> <Post key={post.id} post1={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;