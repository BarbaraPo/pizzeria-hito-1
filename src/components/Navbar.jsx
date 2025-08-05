
import { Link } from "react-router-dom";

const Navbar = () => {

    const total = 25000;
    const token = false

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
                        <Link
                            to="logout"
                            className=""
                        >
                            <button >Logout</button>
                        </Link>
                        <button>Profile</button>

                    </>
                ) : (

                    <>
                        <Link
                            to="Register"
                        >
                            <button>Register</button>
                        </Link>

                        <Link
                            to="Login"
                        >
                            <button>Login</button>
                        </Link>
                    </>
                )
                }
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ms-auto ps-2">
                        <Link
                            to="/"
                        >
                            <button>Home</button>
                        </Link>

                        <Link
                            to="/Profile"
                        >
                            <button>Profile</button>
                        </Link>

                        <Link
                            to="Pricing"
                        >
                            <button>Pricing</button>
                        </Link>

                        <Link
                            to="/Cart"
                        >
                            <button>Total</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar