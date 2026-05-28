import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/bullet-time-logo.png";

function Navbar() {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  function goToHomeSection(sectionId) {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        <img
          src={logo}
          alt="Bullet Time Games logo"
          className="navbar-logo-img"
        />

        <span>Bullet Time Games</span>
      </Link>

      <nav className="navbar-links">
        <Link to="/">Home</Link>

        <button
          type="button"
          className="navbar-link-button"
          onClick={() => goToHomeSection("consoles")}
        >
          Consoles
        </button>

        <button
          type="button"
          className="navbar-link-button"
          onClick={() => goToHomeSection("games")}
        >
          Games
        </button>
      </nav>

      <div className="navbar-actions">
        <Link to="/cart" className="cart-button">
          Cart {totalItems > 0 && `(${totalItems})`}
        </Link>
      </div>
    </header>
  );
}

export default Navbar;