import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    
    const lodedUsers = useLoaderData();
    const [users, setUsers] = useState(lodedUsers)
    const handleDelete = (_id) => {
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`, {

            method : 'DELETE',
        
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
                alert('user deleted successfully')
                const remaining = lodedUsers.filter(user => user._id !== _id)
                setUsers(remaining)
            }
        })
    }
    return (
        <div>
            <h1>users : {users.length}</h1>
            {
                users.map(user => <p key={user._id}>{user.name} : {user.email} 
                <button> <Link to = {`/update/${user._id}`}>Update</Link></button> 
                <button onClick={()=>handleDelete(user._id)}>X</button> </p>)
            }
        </div>
    );
};

export default Users;