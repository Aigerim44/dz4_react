import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/Store.js";
import UserList from "./components/userList.jsx";
import UserEditForm from "./components/userEditForm.jsx";
import UserProfile from "./components/userProfile.jsx";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>User Profile App</h1>
                <UserList />
                <UserEditForm />
                <UserProfile />
            </div>
        </Provider>
    );
};

export default App;

