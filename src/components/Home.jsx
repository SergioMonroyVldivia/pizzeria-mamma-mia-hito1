import Header from './Header';
import CardPizza from './CardPizza';

// 1. Importamos las imágenes locales
import pizza1 from '../assets/img/pizza1.jpg';
import pizza2 from '../assets/img/pizza2.jpg';
import pizza3 from '../assets/img/pizza3.jpg';

const Home = () => {
  return (
    <main>
      <Header />
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img={pizza1} // <-- 2. Usamos la imagen importada
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img={pizza2} // <-- 2. Usamos la imagen importada
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img={pizza3} // <-- 2. Usamos la imagen importada
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;