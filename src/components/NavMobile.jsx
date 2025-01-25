import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className="md:hidden">
      <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
      {isOpen && (
        <nav className="fixed left-0 shadow-xl right-0 pb-5 z-20 bg-white/80">
          <ul className="grid">
            <li className="border-t-2 border-stone-400 py-1 px-5 hover:bg-stone-400/60">
              <Link onClick={() => setIsOpen((prev) => !prev)} to="/" className="text-neutral-500 font-semibold">Home</Link>
            </li>

            <li className="border-t-2 border-stone-400 py-1 px-5 hover:bg-stone-400/60">
              <Link onClick={() => setIsOpen((prev) => !prev)} to="/shop-page/all" className="text-neutral-500 font-semibold">Shop</Link>
            </li>

            <li className="border-t-2 border-stone-400 py-1 px-5 hover:bg-stone-400/60">
              <Link onClick={() => setIsOpen((prev) => !prev)} to="/about" className="text-neutral-500 font-semibold">About Us</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default NavMobile;