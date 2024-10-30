import React, { createContext, useContext, useState} from "react";


const UserContext = createContext();


export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(localStorage.getItem('username'));

    const login = (username) => {
        setUser(username);
        localStorage.setItem('username', username);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('username');
    };

    return (
        <UserContext.Provider value={{user,login,logout}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
}