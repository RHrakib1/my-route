import { useLoaderData } from "react-router-dom";

const ShowTodos = () => {
    const showtodos = useLoaderData();
    const { id, title } = showtodos
    return (
        <div>
            <h1>this id is : {id}</h1>
            <h3>title :{title}</h3>
        </div>
    );
};

export default ShowTodos;