import PropTypes from "prop-types";
import { type, brand } from "../data/filterItem";
import getBrandFilter from "../utils/handleFilter";
import { useParams } from "react-router-dom";
import FilterDesktop from "./FilterDesktop";
import FilterMobile from "./FilterMobile";

const Filter = ({ handleFilter, paramBrands }) => {
  const { category } = useParams();
  const brands = getBrandFilter(category, brand);

  return (
    <>
      <aside className="sticky top-[48px] bg-white md:border-r-2 md:border-neutral-300 shadow-md md:pl-6 md:w-[250px]">
        <FilterMobile
          type={type}
          brands={brands}
          handleFilter={handleFilter}
          paramBrands={paramBrands}
        />
        <FilterDesktop
          type={type}
          brands={brands}
          handleFilter={handleFilter}
          paramBrands={paramBrands}
        />
      </aside>
    </>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func,
  paramBrands: PropTypes.array,
};

export default Filter;
