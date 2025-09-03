
import { createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);


const UserProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null)

    const login = async (email, password) => {

        try {

            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (!res.ok) throw new Error('Login fallido');

            const data = await res.json();
            setToken(data.token);
            setEmail(data.email);
        } catch (error) {
            console.error('Error en login', error);
        }
    };

    const register = async (email, password) => {
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (!res.ok) throw new Error('Registro fallido');

            const data = await res.json();
            setToken(data.token);
            setEmail(data.email);
        } catch (error) {
            console.error('Error en registro', error);
        }
    };

    const logout = () => {
        setToken(null);
        setEmail(null);
    };

    const getProfile = async () => {
        try {
            const res = await fetch('/api/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!res.ok) throw new Error('Error al obtener perfil');

            const data = await res.json();
            return data;
        } catch (error) {
            console.error('Error al obtener el perfil:', error);
            return null;
        }
    };

    return (
        <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;