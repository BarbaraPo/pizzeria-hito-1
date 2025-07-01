

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
                        <button >Logout</button>
                        <button>Profile</button>

                    </>
                ) : (

                    <>
                        <button>Register</button>
                        <button>Login</button>

                    </>
                )
                }
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ms-auto ps-2">
                        <button>Home</button>
                        <a className="nav-item nav-link" href="#">Profile</a>
                        <a className="nav-item nav-link" href="#">Pricing</a>
                        <button>Total</button>

                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar