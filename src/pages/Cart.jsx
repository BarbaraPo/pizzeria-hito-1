import { useState } from "react";
import { pizzaCart } from "../pizzas";
import '../App.css'

const Cart = () => {

    const [cart, setCart] = useState(pizzaCart)

    const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0)

    const updateQuantity = (id, action) => {
        setCart(prevState =>
            prevState
                .map(item => {
                    if (item.id === id) {
                        let newCount = item.count
                        if (action === "incrementar") newCount += 1
                        if (action === "disminuir") newCount -= 1;
                        return { ...item, count: newCount };
                    }
                    return item;
                })
                .filter(item => item.count > 0)
        );
    };

    return (
        <div className="cart-container">
            <h2>Detalles del Pedido </h2>
            <ul className="cart-list">
                {cart.map(pizza =>

                    <li className="cart-item" key={pizza.id}>
                        <img src={pizza.img} alt={pizza.name} />
                       
                        <div className="item-details">
                            <h3> {pizza.name}</h3>
                            <p>Precio: ${pizza.price}</p>
                            <p>Cantidad: {pizza.count}</p>
                        </div>

                        <div className="quantity-controls">
                            <button onClick={() => updateQuantity(pizza.id, "disminuir")}>-</button>
                            <span>{pizza.count}</span>
                            <button onClick={() => updateQuantity(pizza.id, "incrementar")}>+</button>
                        </div>
                    </li>
                )
                }
            </ul>

            <h4 className="cart-total"> Total: <strong> ${total}</strong> </h4>

            <button className="pay-button"> Pagar </button>

        </div>
    )
}

export default Cart