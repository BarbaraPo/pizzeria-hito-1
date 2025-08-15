import { createContext, useState } from "react";
import { useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {

        const nowpizza = cart.find(item => item.id === pizza.id)

        if (nowpizza) {
            const cartnow = cart.map(item => {
                if (item.id === pizza.id) {
                    return { ...item, count: item.count + 1 }
                } else {
                    return item;
                }
            })
            setCart(cartnow);

        } else
            setCart([...cart, { ...pizza, count: 1 }]);
    }

    const updateQuantity = (id, action) => {
        const newcart = cart.map(pizza => {
            if (pizza.id === id) {

                let newQuantity = pizza.count;

                if (action === 'incrementar') {
                    newQuantity += 1;
                }

                if (action === 'disminuir') {
                    newQuantity -= 1
                }
                return { ...pizza, count: newQuantity }
            }

            return pizza;
        })
            .filter(pizza => pizza.count > 0);

        setCart(newcart)
    };

    const total = cart.reduce((acumulador, pizza) => {
        return acumulador + (pizza.price * pizza.count);
    }, 0)


    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                updateQuantity,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider