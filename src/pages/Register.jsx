import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const { register } = useUser();
    const navigate = useNavigate();

    const validarDatos = async (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim() || !password2.trim()) {
            alert("Completar todos los datos por favor");
            return;
        }

        if (password !== password2) {
            alert("Las contraseñas no coinciden");
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        try {
            await register(email, password);
            alert("Registro exitoso");
            navigate("/profile");
        } catch {
            alert("Error al registrarse");
        }
    };

    return (

        <>
            <form className="formregister" onSubmit={validarDatos}>

                <div className="form-register">
                    <label>Email</label>
                    <input type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-register">
                    <label>Contraseña</label>
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-register">
                    <label>Confirmar Contraseña</label>
                    <input type="password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </>
    );
};

export default Register