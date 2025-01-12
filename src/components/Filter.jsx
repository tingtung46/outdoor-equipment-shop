import { ListFilter } from 'lucide-react';
import PropTypes from 'prop-types';
import { type, brand } from '../data/filterItem';
import { Link } from 'react-router-dom';

const Filter = ({ handleFilter }) => {
  return (
    <>
      <aside>
        <h2>
          Filter <ListFilter />
        </h2>

        <div>
          <p>Category</p>

          <ul>
            {type.map((type) => {
              return (
                <li key={type.id}>
                  <Link to={`/shop-page/${type.param}`}>
                    {type.type}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p>Brand</p>

          {brand.map((brand) => {
            return (
              <button
                type="button"
                data-name={brand.brand}
                onClick={(e) => handleFilter(e, 'brand')}
                key={brand.id}
              >
                {brand.brand}
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func,
}

export default Filter;
