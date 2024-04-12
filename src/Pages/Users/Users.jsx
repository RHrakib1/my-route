
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './users.css'


const Users = () => {
    // kono data load korar jonnne aita use kora hoi 
    const users1 = useLoaderData();
    console.log(users1);
    return (
        <div>
            <p> user: {users1.length}</p>
            
            <div className='users'>
                {
                    users1.map(user => <User key={user.id} user5={user} ></User>)
                }
            </div>
        </div>
    );
};

export default Users;