import { useState } from "react"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailValido = "barbara@ejemplo.com";
    const passwordValida = "comidarapida";


    const validarDatos = (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            alert("Completar todos los datos por favor");
            return
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        if (email !== emailValido || password !== passwordValida) {
            alert("Email o contraseña incorrectos");
            return;
        }

        alert("Registro exitoso")
    }


    return (
        <form className="formlogin" onSubmit={validarDatos}>

            <div className="form-login">
                <label>Email</label>
                <input type='email'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)} value={email}
                />
            </div>
            <div className="form-login">
                <label>Contreseña</label>
                <input type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)} value={password}
                />
            </div>

            <button type="submit">Ingresar</button>

        </form>

    )
}

export default Login