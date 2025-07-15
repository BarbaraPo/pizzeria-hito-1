

import CardPizza from './CardPizza'
import header from '../assets/img/Header.jpg'
import { useState } from 'react';
import { useEffect } from 'react';
//import { pizzas } from '../pizzas.js'

const Home = () => {

  const [pizzas, setPizzas] = useState([])

  const url = "http://localhost:5000/api/pizzas";

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("error al obtener las pizzas", error)
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      <div>
        <div className="hero-container position-relative text-white text-center">
          <img src={header} className="img-fluid w-100" alt="Banner Pizzería" />
          <div className="hero-text position-absolute top-50 start-50 translate-middle">
            <h1 className="display-4 fw-bold bg-dark bg-opacity-50 px-3 py-2 rounded">
              Pizzería Mamma Mia
            </h1>
          </div>
        </div>


        <main className="container">
          <section className="row">

            <h2> Nuestras Opciones</h2>

            {pizzas.map(pizza => (
              <CardPizza
                key={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />)
            )
            }
          </section>
        </main>
      </div>

    </div>
  )
}

export default Home
