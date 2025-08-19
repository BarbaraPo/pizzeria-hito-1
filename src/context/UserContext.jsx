import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);


const UserProvider = ({ children }) => {

    const [token, setToken] = useState(true);

    const logout = () => {
        setToken(false);
    };

    return (
        <UserContext.Provider value={{ token, logout }}>
            {children}
        </UserContext.Provider>

    )
}

export default UserProvider;