import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const FilterDesktop = ({ type, brands, handleFilter, paramBrands }) => {
  const [checkedList, setCheckedList] = useState([]);

  const handleSelect = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckedList([...checkedList, value]);
    } else {
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedList(filteredList);
    }
  };

  return (
    <div className="hidden md:block md:sticky md:top-[48px]">
      <div>
        <h3 className="font-semibold text-lg mt-3 mb-2">Category</h3>

        <ul>
          {type.map((type) => {
            return (
              <li key={type.id}>
                <Link
                  to={`/shop-page/${type.param}`}
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
        <h3 className="font-semibold text-lg mt-5 mb-2">Brand</h3>

        <div>
          {brands.map((brand) => {
            return (
              <div key={brand.id} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name={brand.brand.toLowerCase()}
                  id={brand.brand.toLowerCase()}
                  value={brand.brand}
                  checked={
                    brand.brand.toLowerCase() ===
                    paramBrands.find(
                      (item) => item === brand.brand.toLowerCase()
                    )
                  }
                  onChange={(e) => {
                    handleFilter(e, brand.brand.toLowerCase());
                    handleSelect(e);
                  }}
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
    </div>
  );
};

FilterDesktop.propTypes = {
  type: PropTypes.array,
  brands: PropTypes.array,
  handleFilter: PropTypes.func,
  paramBrands: PropTypes.array,
};

export default FilterDesktop;
