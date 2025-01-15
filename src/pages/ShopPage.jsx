import Filter from '../components/Filter';
import { Outlet, useSearchParams } from 'react-router-dom';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const brands = searchParams.getAll('brand') || [];

  const handleBrandFilter = (e, brandName) => {
    const include = brands.includes(brandName);
    if (include && !e.target.checked) {
      const deletedBrand = brands.filter((brand) => brand !== brandName);
      return setSearchParams((prev) => ({
        ...prev,
        brand: deletedBrand,
      }));
    }

    setSearchParams((prev) => ({
      ...prev,
      brand: [...brands, brandName],
    }));
  };

  return (
    <>
      <section className="flex">
        <Filter handleFilter={handleBrandFilter} brands={brands} />

        <section>
          <Outlet />
        </section>
      </section>
    </>
  );
};

export default ShopPage;
