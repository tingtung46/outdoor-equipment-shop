import { ListFilter } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useClickAway } from 'react-use';

const FilterMobile = ({ type, brands, handleFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className="md:hidden">
      <button type="button">
        <ListFilter />
      </button>

      {isOpen && (
        <div>
          <div>
            <p>Category</p>

            <ul>
              {type.map((type) => {
                return (
                  <li key={type.id}>
                    <Link to={`/shop-page/${type.param}`}>{type.type}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p>Brand</p>

            <div>
              {brands.map((brand) => {
                return (
                  <div key={brand.id}>
                    <input
                      type="checkbox"
                      name={brand.brand.toLowerCase()}
                      id={brand.brand.toLowerCase()}
                      onChange={(e) => handleFilter(e, brand.brand.toLowerCase())}
                    />
                    <label htmlFor={brand.brand.toLowerCase()}>{brand.brand}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterMobile;
