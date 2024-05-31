import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
    const currentUser = useSelector((state) => state.currentUser);

    if (!currentUser) {
        return <div>Выберите пользователя</div>;
    }

    return (
        <div>
            <h2>Профиль</h2>
            <p><b>Имя:</b> {currentUser.first_name}</p>
            <p><b>Email:</b> {currentUser.email}</p>
            <p><b>Пол:</b> {currentUser.gender}</p>
            <p><b>Дата рождения:</b> {currentUser.birth_date}</p>
        </div>
    );
};

export default UserProfile;
