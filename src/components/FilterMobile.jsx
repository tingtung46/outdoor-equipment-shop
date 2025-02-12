import { ListFilter } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useClickAway } from 'react-use';

const FilterMobile = ({ type, brands, handleFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setIsOpen(false));

  const handleOpenFilter = () => {
    if (!isOpen) return setIsOpen(true);

    setIsOpen(false);
  };

  return (
    <div ref={ref} className="md:hidden relative">
      <button
        type="button"
        onClick={handleOpenFilter}
        className="inline bg-white text-neutral-500 focus:outline-none"
      >
        <ListFilter />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 shadow-xl right-40 sm:right-80 z-20 bg-white overflow-y-auto h-[calc(100vw-1px)] p-6"
          >
            <div>
              <h3 className="font-semibold text-lg mt-3 mb-2">Category</h3>

              <ul>
                {type.map((type) => {
                  return (
                    <li key={type.id}>
                      <Link
                        to={`/shop-page/${type.param}`}
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="text-neutral-600 text-base"
                      >
                        {type.type}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-3 mb-2">Brand</h3>

              <div>
                {brands.map((brand) => {
                  return (
                    <div key={brand.id} className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name={brand.brand.toLowerCase()}
                        id={brand.brand.toLowerCase()}
                        onChange={(e) => handleFilter(e, brand.brand.toLowerCase())}
                        className="peer appearance-none shrink-0 w-4 h-4 border-2 border-gray-300 rounded-sm bg-white focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-gray-200 checked:bg-gray-500 checked:border-0"
                      />
                      <label
                        htmlFor={brand.brand.toLowerCase()}
                        className="text-neutral-600 text-base"
                      >
                        {brand.brand}
                      </label>
                      <svg
                        className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterMobile;
