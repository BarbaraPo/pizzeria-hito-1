
import React from 'react'

const CardPizza = ({ name, price, ingredients, img }) => {
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
                    list-group-item
                    ms-auto
                    fw-light
                    gris
                    py-0
                    pe-1
                    2
                    1
                    5
                    py-0
                    pe-1
                    2
                    1
                    5
                  ">
              {price}

            </li>
          </ul>
          <div className='botones'>
            <button>Ver Más</button>
            <button>Añadir </button>
          </div>

        </div>
      </div>
    </article>
  )
}

export default CardPizza