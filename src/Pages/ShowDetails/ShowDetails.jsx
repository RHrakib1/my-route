import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
    const post = useLoaderData();
    const { id, title } = post
    return (
        <div>
            <h3>post details about :{id}</h3>
            <p>title : {title}</p>
        </div>
    );
};

export default ShowDetails;