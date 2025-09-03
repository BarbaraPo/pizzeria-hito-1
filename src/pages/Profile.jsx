//import { Button } from 'bootstrap'
import React from 'react'

import { useEffect } from 'react'
import { useState } from 'react'
import { useUser } from "../context/UserContext"
import { useNavigate } from 'react-router-dom'


const Profile = () => {

    const { email, getProfile, logout } = useUser();
    const [perfil, setPerfil] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const cargarPerfil = async () => {
            try {
                const data = await getProfile();
                setPerfil(data);
            } catch (error) {
                alert("Error al obtener el perfil");
                console.error(error);
            }
        };

        cargarPerfil();
    }, [getProfile]);

    const cerrarSesion = () => {
        logout();
        navigate('/');
    };

    return (

        <div>
            <h2>Perfil</h2>
            <p>Email: {perfil?.email || email}</p>
            <button className='' onClick={cerrarSesion}>Cerrar sesion </button>
        </div>
    )
}

export default Profile