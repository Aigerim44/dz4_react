import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../store/Action.js';

const UserEditForm = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUser);
    const [formData, setFormData] = useState(currentUser || {});

    useEffect(() => {
        if (currentUser) {
            setFormData(currentUser);
        }
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(currentUser.id, formData));
    };

    if (!currentUser) {
        return <div>Выберите пользователя для изменения</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Имя:</label>
                <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label>Пол:</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div>
                <label>Дата рождения:</label>
                <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} />
            </div>
            <button type="submit">Сохранить</button>
        </form>
    );
};

export default UserEditForm;
