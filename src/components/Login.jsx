

const Login = () => {


    return (
        <form>

            <div className=''>
                <label>Email</label>
                <input type='email' name='email' />
            </div>
            <div className=''>
                <label>Contreseña</label>
                <input type="password" name="contraseña" />
            </div>

            <button type="submit">Enviar</button>

        </form>

    )
}

export default Login