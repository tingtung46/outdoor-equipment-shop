import { useClickAway } from 'react-use';
import { useRef } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';

const NavMobile = ({ isOpen, setIsOpen }) => {
  const ref = useRef(null);

  useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className="md:hidden">
      <div className="text-neutral-500">
        <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-xl right-0 z-20 bg-white"
          >
            <ul className="grid">
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                className="py-2 px-5 mx-7 hover:bg-stone-400/60"
              >
                <Link
                  onClick={() => setIsOpen((prev) => !prev)}
                  to="/"
                  className="text-neutral-500 font-semibold"
                >
                  Home
                </Link>
              </motion.li>

              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                className="border-t-2 border-gray-400/60 py-2 px-5 mx-7 hover:bg-stone-400/60"
              >
                <Link
                  onClick={() => setIsOpen((prev) => !prev)}
                  to="/shop-page/all"
                  className="text-neutral-500 font-semibold"
                >
                  Shop
                </Link>
              </motion.li>

              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                className="border-t-2 border-gray-400/60 py-2 px-5 mx-7 hover:bg-stone-400/60"
              >
                <Link
                  onClick={() => setIsOpen((prev) => !prev)}
                  to="/about"
                  className="text-neutral-500 font-semibold"
                >
                  About Us
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
