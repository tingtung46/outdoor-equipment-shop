import { ShoppingCart } from 'lucide-react';
import logo from '../images/logo/navbar-logo.png';
import NavDesktop from './NavDesktop';
import { Link } from 'react-router-dom';
import NavMobile from './NavMobile';
import { useState } from 'react';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeBgColor = () => {
    if (window.scrollY >= 48) return setNavbar(true);

    setNavbar(false);
  };

  window.addEventListener('scroll', changeBgColor);

  return (
    <>
      <header
        className={`sticky top-0 flex flex-row justify-between items-center w-full px-8 z-30 ${navbar || isOpen ? 'bg-white shadow-md' : 'bg-transparent'}`}
      >
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <NavDesktop />

        <div className="flex flex-row justify-between items-center gap-5">
          <Link to="/cart" className="text-neutral-500 transition-all">
            <ShoppingCart />
          </Link>
          <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
    </>
  );
};

export default Header;
