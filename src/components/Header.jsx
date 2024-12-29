import logo from "../images/logo/navbar-logo.png";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div>
            <img src={logo} alt="Logo" />
          </div>

          <nav className="flex">
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About Us</li>
            </ul>
          </nav>

          <button type="button">
            <ShoppingCart />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
