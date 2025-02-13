import { ShoppingCart } from 'lucide-react';
import logo from '../images/logo/navbar-logo.png';
import NavDesktop from './NavDesktop';
import { Link, useLocation } from 'react-router-dom';
import NavMobile from './NavMobile';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ shoppingCart }) => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  let quantityTotal = shoppingCart.reduce((total, item) => item.quantity + total, 0);

  const changeBgColor = () => {
    if (window.scrollY >= 48) return setNavbar(true);

    setNavbar(false);
  };

  window.addEventListener('scroll', changeBgColor);

  return (
    <>
      <header
        className={`sticky top-0 flex flex-row justify-between items-center w-full px-8 z-30 ${navbar || isOpen ? 'bg-white shadow-md' : ''} ${location.pathname === '/' ? 'bg-transparent' : 'bg-white shadow-md'}`}
      >
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <NavDesktop />

        <div className="flex flex-row justify-between items-center gap-5">
          <button type="button" className="relative bg-transparent focus:outline-none">
            <Link to="/cart" className="text-neutral-500 transition-all">
              <ShoppingCart />
            </Link>
            {quantityTotal === 0 ? (
              ''
            ) : (
              <div className="text-sm rounded-full bg-gray-500 flex justify-center items-center w-[1.5rem] h-[1.5rem] absolute top-0 right-0 translate-1/4">
                {quantityTotal}
              </div>
            )}
          </button>
          <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  shoppingCart: PropTypes.array,
};

export default Header;
