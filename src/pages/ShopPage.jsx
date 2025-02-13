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
    <section className="md:flex md:gap-10 bg-gray-200 min-h-screen">
      <Filter handleFilter={handleBrandFilter} brands={brands} />

      <Outlet />
    </section>
  );
};

export default ShopPage;
