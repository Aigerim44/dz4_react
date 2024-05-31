export const setCurrentUser = (user) => ({
    type: 'SET_CURRENT_USER',
    payload: user
});

export const updateUser = (id, data) => ({
    type: 'UPDATE_USER',
    payload: { id, data }
});
