
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import "./index.css"

import React from "react";

import CartProvider from './context/CartContext.jsx';
import UserProvider from './context/UserContext.jsx'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)

