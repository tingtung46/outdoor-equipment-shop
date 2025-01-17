import { ListFilter } from 'lucide-react';
import PropTypes from 'prop-types';
import { type, brand } from '../data/filterItem';
import getBrandFilter from '../utils/handleFilter';
import { Link, useParams } from 'react-router-dom';

const Filter = ({ handleFilter }) => {
  const { category } = useParams();
  const brands = getBrandFilter(category, brand);

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
      </aside>
    </>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func,
  brands: PropTypes.array,
};

export default Filter;
