import { Link } from 'react-router-dom';
import logo from '../images/logo/navbar-logo.png';
import { ShoppingCart } from 'lucide-react';

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
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/shop-page/all">Shop</Link>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </nav>

          <Link to="/cart">
            <ShoppingCart />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
