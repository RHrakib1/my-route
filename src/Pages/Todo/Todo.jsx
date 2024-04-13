import { Link } from "react-router-dom";

const Todo = ({ todo }) => {
    const {id, title, completed } = todo;
    const todoStyle = {
        border: "3px solid tomato",
        padding: "10px",
        borderRadious: "20px"
    }
    return (
        
        <div style={todoStyle}>
            <h2>id:{id}</h2>
            <h3>title : {title}</h3>
            <Link to={`/todo/${id}`}>ShowToDos</Link>
        </div>
    );
};

export default Todo;