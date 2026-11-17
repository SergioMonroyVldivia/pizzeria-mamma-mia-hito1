// 1. Importamos la imagen local desde la carpeta assets
import fondoHeader from '../assets/img/fondo.jpg'; 

const Header = () => {
  return (
    <header
      className="d-flex flex-column justify-content-center align-items-center text-white text-center px-3"
      style={{
        // 2. Usamos la variable de la imagen importada
        backgroundImage: `url(${fondoHeader})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '30vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <h1 className="display-4 fw-bold">¡Pizzería Mamma Mia!</h1>
      <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="w-75 border-light" />
    </header>
  );
};

export default Header;