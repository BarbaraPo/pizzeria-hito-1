import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom";

const Pizza = () => {
    const {id} = useParams();
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        const obtenerPizza = async () => {
            try {
                const respuesta = await fetch("http://localhost:5000/api/pizzas/P001");
                const datos = await respuesta.json();
                setPizza(datos);
            } catch (error) {
                console.error("Ocurrió un error:", error);
            }
        };

        obtenerPizza();
    }, [id]);

    if (!pizza) {
        return <p className="text-center my-5"> Cargando pizza ...</p>;
    }


    return (

        <div className=" pizza-card">

            <img src={pizza.img} alt={pizza.name} className="pizza-img" />

            <div className="item-details">
                <h3>{pizza.name}</h3>
                <p>Precio:${pizza.price}</p>


                <ul className="ingredient-list">
                    {pizza.ingredients.map((ingrediente, i) => (
                        <li key={i}>{ingrediente}</li>
                    ))}

                </ul>
                <p>{pizza.descripcion}</p>
            </div>


            <button className="pay-button"> Añadir al carrito </button>


        </div>
    )

}

export default Pizza