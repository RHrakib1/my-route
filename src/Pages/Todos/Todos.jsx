import { useLoaderData } from "react-router-dom";
import Todo from "../Todo/Todo";
import "./Todos.css"


const Todos = () => {
    const todos = useLoaderData()
    return (

        <div>
            <h2>this is a TOdoss:{todos.length}</h2>
            <div className="todos">
                {
                    todos.map(todo=> <Todo key={todo.id} todo={todo}></Todo>)
                }
            </div>
        </div>
    );
};

export default Todos;