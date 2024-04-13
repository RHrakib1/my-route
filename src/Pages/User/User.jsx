import { Link } from "react-router-dom";

const User = ({ user5 }) => {
    const { id, name, email, phone } = user5
    const userStyle = {
        border: "3px solid yellow",
        padding: "10px",
        borderRadious: "20px"
    }
    return (
        <div style={userStyle}>
            <h2>ID : {id}</h2>
            <h2>Name : {name}</h2>
            <h2>Email : {email}</h2>
            <h2>Phone : {phone}</h2>
            <Link to={`/user5/${id}`}>user details</Link>
        </div>
    );
};

export default User;