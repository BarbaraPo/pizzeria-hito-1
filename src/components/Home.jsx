

import CardPizza from './CardPizza'
import napolitana from '../assets/img/pizza-napolitana.jpg'
import espanola from '../assets/img/pizza-espanola.jpg'
import pepperoni from '../assets/img/pizza-pepperoni.jpeg'
import header from '../assets/img/Header.jpg'

const Home = () => {

  return (
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

        <CardPizza
          name="Pizza Napolitana"
          price={"Precio $5.950"}
          ingredients={"mozzarella, tomates, jamón, orégano"}
          img={napolitana}
        />
        <CardPizza
          name="Pizza Española"
          price={"Precio $6.950"}
          ingredients={["mozzarella, gorgonzola, parmesano, provolone"]}
          img={espanola}
        />
        <CardPizza
          name="Pizza Pepperoni"
          price={"Precio $6.950"}
          ingredients={["mozzarella, pepperoni, orégano"]}
          img={pepperoni}
        />

      </section>
    </main>
    </div>
  )
}

export default Home
