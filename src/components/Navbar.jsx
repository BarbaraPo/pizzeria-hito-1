
import { Link } from "react-router-dom";

import { useCart } from '../context/CartContext'

import { useUser } from "../context/UserContext";

const Navbar = () => {

    const { total } = useCart();

    const { token, logout } = useUser();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-white bg-green">
            <div className="container">
                <a className="navbar-brand ms-2" href="#"></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {token ? (
                    <>
                        <Link to="/profile">
                            <button>Profile</button>
                        </Link>

                        <button onClick={logout}>Logout</button>
                    </>
                ) : (

                    <>
                        <Link to="Register">
                            <button>Register</button>
                        </Link>

                        <Link to="Login">
                            <button>Login</button>
                        </Link>
                    </>
                )
                }
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ms-auto ps-2">

                        <Link to="/">
                            <button>Home</button>
                        </Link>

                        <Link to="/Cart">
                            <button>Total: ${total}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar