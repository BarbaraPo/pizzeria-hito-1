import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //const emailValido = "barbara@ejemplo.com";
    //const passwordValida = "comidarapida";
    const { login } = useUser();
    const navigate = useNavigate();


    const validarDatos = async (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            alert("Completar todos los datos por favor");
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        try {
            await login(email, password);
            // alert("inicio de sesion exitoso");
            navigate("/profile");
        } catch {
            alert("Email o contraseña incorrectos");
        }
    };


    return (
        <form className="formlogin" onSubmit={validarDatos}>

            <div className="form-login">
                <label>Email</label>
                <input type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-login">
                <label>Contraseña</label>
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type="submit">Ingresar</button>
        </form>
    )
}

export default Login;