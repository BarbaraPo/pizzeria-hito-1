import { Route, Routes, Navigate } from "react-router-dom"

import './App.css'

import Cart from './pages/Cart'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Pizza from './pages/Pizza'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

import { useUser } from "./context/UserContext"

function App() {
   const { token } = useUser();

  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />}/>
        
        <Route path="/cart" element={<Cart />} />
        
        <Route path="/pizza/:id" element={<Pizza />} />
        
        
        <Route path="/login" element={token ? <Navigate to="/" /> : <Login/>} />
        
        <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} />
        
       
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
        
       
        <Route path="/404" element={<NotFound />} />
        
        <Route path="/*" element={<NotFound />} />
      
      </Routes>

      {/*<Home/>*/}
      {/*<Register/>*/}
      {/*<Login/>*/}
      {/*<Cart/>*/}
      {/*<Pizza/>+*/}
      <Footer />

    </>
  )
}

export default App;
