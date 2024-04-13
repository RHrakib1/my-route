import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { id, name, email } = user
    return (
        <div>
            <h3>user about info:{id}</h3>
            <h3>user about info:{name}</h3>
            <h3>user about info:{email}</h3>
        </div>
    );
};

export default UserDetails;