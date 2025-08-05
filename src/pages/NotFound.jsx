import { Link } from "react-router-dom"

export const NotFound = () => {

    return (

        <div>

            <h3 className="">
                Página no encontrada
            </h3>

            <Link
                to="/"
            >
                <p>Volver al inicio</p>
            </Link>

        </div>

    )
}

export default NotFound