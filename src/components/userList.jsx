import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setCurrentUser} from "../store/Action.js";

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    const handleEditClick = (user) => {
        dispatch(setCurrentUser(user));
    };

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.first_name} - {user.email}
                        <button onClick={() => handleEditClick(user)}>Изменить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
