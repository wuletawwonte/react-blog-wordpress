import {createContext} from 'react';

const UserContext = createContext({
    isLoggedIn: false,
    token: null,
    user: null
});

export default UserContext;