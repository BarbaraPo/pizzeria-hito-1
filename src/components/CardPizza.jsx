
import React from 'react'
import { useCart } from '../context/CartContext'

const CardPizza = ({id, name, price, ingredients, img }) => {
     const {addToCart} = useCart();

     const pizza = {id,name,price,img,ingredients};
  
  return (


    <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
      <div className="card mx-2">
        <img src={img} className="card-img-top" alt="" />

        <div className="card-body">
          <h5 className="card-title fw-light mb-3">{name}</h5>
          <p>Ingredientes</p>
          <p className="card-text h6 fw-light">{ingredients}</p>

          <hr />

          <ul className="list-group list-group-flush text-right">
            <li className="
                    list-group-item ms-auto fw-light text-end text-muted">
              ${price}
            </li>
          </ul>
          <div className='botones'>
            <button>Ver Más</button>
            <button onClick={() =>addToCart(pizza)}>Añadir </button>
          </div>

        </div>
      </div>
    </article>
  )
}

export default CardPizza;