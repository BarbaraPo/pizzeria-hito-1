import React from 'react'
import logo from '../assets/img/mamma-mia.png'


const Footer = () => {
  return (
    <footer className="text-center my-4 text-secondary">
    <img src={logo} className="logo" width="82px" />
    <p className="mx-5">© 2025 Pizzeria Mamma Mia .Todos los derechos reservados.</p>
  </footer>
  )
}

export default Footer