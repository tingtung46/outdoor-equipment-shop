import { ShoppingCart } from 'lucide-react';
import logo from '../images/logo/navbar-logo.png';
import NavDesktop from './NavDesktop';
import { Link } from "react-router-dom";
import NavMobile from './NavMobile';

const Header = () => {
  return (
    <>
      <header className='relative flex flex-row justify-between items-center w-full px-8 z-30'>
        <div>
          <img src={logo} alt="Logo" />
        </div>

        <NavDesktop />

        <div className='flex flex-row justify-between items-center gap-5'>
          <Link to="/cart" className="text-neutral-500 transition-all">
            <ShoppingCart />
          </Link>
          <NavMobile />
        </div>
      </header>
    </>
  );
};

export default Header;
