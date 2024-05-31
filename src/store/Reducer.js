const defaultState = {
    users: [
        { id: 1, first_name: "Caron", email: "clindup0@sourceforge.net", gender: "Female", birth_date: "24/08/2023" },
        { id: 2, first_name: "Broderic", email: "btearle1@jalbum.net", gender: "Male", birth_date: "16/07/2023" },
        { id: 3, first_name: "Jeromy", email: "jmckennan2@microsoft.com", gender: "Male", birth_date: "20/12/2023" },
        { id: 4, first_name: "Sonny", email: "seastwell3@vinaora.com", gender: "Male", birth_date: "10/10/2023" },
        { id: 5, first_name: "Rey", email: "rabrahmovici4@cnn.com", gender: "Female", birth_date: "10/07/2023" },
        { id: 6, first_name: "Joelle", email: "jkarlolak5@china.com.cn", gender: "Female", birth_date: "14/06/2023" },
        { id: 7, first_name: "Alisha", email: "ascemp6@a8.net", gender: "Female", birth_date: "11/04/2023" },
        { id: 8, first_name: "Cal", email: "cfattorini7@github.com", gender: "Female", birth_date: "05/06/2023" },
        { id: 9, first_name: "Filippa", email: "fhail8@timesonline.co.uk", gender: "Female", birth_date: "03/05/2023" },
        { id: 10, first_name: "Wenona", email: "whattersley9@shinystat.com", gender: "Female", birth_date: "08/12/2023" },
        { id: 11, first_name: "Darcey", email: "dfishleya@odnoklassniki.ru", gender: "Female", birth_date: "17/11/2023" },
        { id: 12, first_name: "Zack", email: "zbennerb@disqus.com", gender: "Male", birth_date: "12/10/2023" },
        { id: 13, first_name: "April", email: "abuyec@lycos.com", gender: "Female", birth_date: "26/04/2023" },
        { id: 14, first_name: "Jobi", email: "jswaitd@ted.com", gender: "Female", birth_date: "23/11/2023" },
        { id: 15, first_name: "Rudiger", email: "rtolemachee@gravatar.com", gender: "Male", birth_date: "12/02/2024" }
    ],
    currentUser: null
};

export const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.payload.id ? { ...user, ...action.payload.data } : user
                )
            };
        default:
            return state;
    }
};

