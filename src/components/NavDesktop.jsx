import { Link } from "react-router-dom";

const NavDesktop = () => {
  return (
    <nav className="hidden md:flex md:justify-between md:items-center md:gap-5 text-md">
      <ul className="flex flex-row gap-5 items-center">
        <li>
          <Link to="/" className="text-neutral-500 font-semibold hover:underline transition-all">Home</Link>
        </li>

        <li>
          <Link to="/shop-page/all" className="text-neutral-500 font-semibold hover:underline transition-all">Shop</Link>
        </li>

        <li>
          <Link to="/about" className="text-neutral-500 font-semibold hover:underline transition-all">About Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavDesktop;