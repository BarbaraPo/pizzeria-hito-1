//import { useState } from "react";
//import { pizzaCart } from "../pizzas";
import '../App.css'

import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Cart = () => {

    const {cart, updateQuantity, total} = useCart();
    const { token } = useUser();

    return (
        <div className="cart-container">
            <h2>Detalles del Pedido </h2>
            <ul className="cart-list">
               
                {cart.map(pizza => (

                    <li className="cart-item" key={pizza.id}>
                        <img src={pizza.img} alt={pizza.name} />
                       
                        <div className="item-details">
                            <h3> {pizza.name}</h3>
                            <p>Precio: $ {pizza.price}</p>
                            <p>Cantidad: {pizza.count}</p>
                        </div>

                        <div className="quantity-controls">
                            <button onClick={() => updateQuantity(pizza.id, "disminuir")}>-</button>
                            <span>{pizza.count}</span>
                            <button onClick={() => updateQuantity(pizza.id, "incrementar")}>+</button>
                        </div>
                    </li>
                ) ) }
            </ul>

            <h4 className="cart-total"> Total: <strong> ${total}</strong> </h4>

            <button className="pay-button" disabled={!token}> Pagar </button>

        </div>
    )
}

export default Cart