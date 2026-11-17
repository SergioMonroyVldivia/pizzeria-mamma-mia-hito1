import { formatNumber } from '../utils/formatNumber';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
      <div className="card-body d-flex flex-column">
        <h4 className="card-title text-capitalize">Pizza {name}</h4>
        <hr />
        <p className="text-muted text-center mb-1">Ingredientes:</p>
        <p className="text-center small">
          🍕 {ingredients.join(', ')}
        </p>
        <hr />
        <h4 className="text-center fw-bold mb-3">
          Precio: ${formatNumber(price)}
        </h4>
        <div className="d-flex justify-content-between mt-auto">
          <button className="btn btn-outline-dark btn-sm">Ver Más 👀</button>
          <button className="btn btn-dark btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;