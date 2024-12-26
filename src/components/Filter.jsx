import { FilterIcon } from 'lucide-react';
import { types, brands } from '../data/filterItem';

export const Filter = () => {
  return (
    <>
      <aside>
        <h2>
          Filter <FilterIcon />
        </h2>

        <div>
          <p>Type</p>

          <button type="button">All</button>

          {types.map((type) => {
            return (
              <button type="button" key={type.id}>
                {type.type}
              </button>
            );
          })}
        </div>

        <div>
          <p>Brand</p>

          <button type="button">All</button>

          {brands.map((brand) => {
            return (
              <button type="button" key={brand.id}>
                {brand.brand}
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
};
