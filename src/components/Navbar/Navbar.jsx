import "./styles.css"
import CartWidget from '../CartWidget/CartWidget'; // El componente CartWidget
import logo from "../../assets/images navbar/Logo.png"

const NavBar = () => {
  return (
    <nav className="navbar">
    <div className="logo-container">
      <img src={logo} alt="Logo de la empresa" />
    </div>
    <div className="cart-container">
      <i className="fa fa-shopping-cart"></i>
  </div>
  {/* Resto del contenido del Navbar */}
</nav>
  );
};

export default NavBar;
