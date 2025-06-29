import { useState } from "react"

const Register = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [password2, setPassword2] = useState('')

const validarDatos = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !password2.trim() ){
        alert ("Completar todos los datos por favor");
        return
    }

    if (password !== password2) {
       alert ("Las contarseñas no coinciden");
       return;
    }

    alert("Registro exitoso")
}

    return (

        <>
            <form className="formregister" onSubmit={validarDatos}>

                <div className="form-register">
                    <label>Email</label>
                    <input type='email' 
                    name='email' 
                    onChange={(e) =>setEmail(e.target.value)} value={email}
                    />
                </div>
                <div className="form-register">
                    <label>Contraseña</label>
                    <input type="password" 
                    name="password"
                    onChange={(e) =>setPassword(e.target.value)} value={password}
                     />
                </div>
                <div className="form-register">
                    <label>Confirmar Contraseña</label>
                    <input type="password" 
                    name="password2" 
                    onChange={(e) =>setPassword2(e.target.value)} value={password2}
                    />
                </div>
                <button type="submit">Ingresar</button>
           
            </form>
        </>

    )
}

export default Register