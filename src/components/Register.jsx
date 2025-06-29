

const Register = () => {
    return (

        <>
            <form>

                <div className=''>
                    <label>Email</label>
                    <input type='email' name='email' />
                </div>
                <div className=''>
                    <label>Contreseña</label>
                    <input type="password" name="contraseña" />
                </div>
                <div className=''>
                    <label>Confirmar Contraseña</label>
                    <input type="password" name="confirmar_contraseña" />
                </div>
                <button type="submit">Enviar</button>
           
            </form>
        </>

    )
}

export default Register