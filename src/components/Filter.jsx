import { ListFilter } from 'lucide-react';
import PropTypes from 'prop-types';
import { type, brand } from '../data/filterItem';

const Filter = ({ handleFilter }) => {
  return (
    <>
      <aside>
        <h2>
          Filter <ListFilter />
        </h2>

        <div>
          <p>Type</p>

          {type.map((type) => {
            return (
              <button
                type="button"
                data-name={type.type}
                onClick={(e) => handleFilter(e, 'type')}
                key={type.id}
              >
                {type.type}
              </button>
            );
          })}
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
