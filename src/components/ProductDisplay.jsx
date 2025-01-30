import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import Pagination from './Pagination';
import PropTypes from 'prop-types';
import { useParams, useSearchParams } from 'react-router-dom';
import { getData } from '../utils/productDisplayManager';

let pageSize = 9;

const ProductDisplay = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const filteredBrand = searchParams.getAll('brand') || [];
  const { category } = useParams();

  const products = getData(category);
  const filteredProducts = [].flat();

  const currentProductData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    return products.slice(firstPageIndex, lastPageIndex);
  }, [products, currentPage]);

  if (filteredBrand) {
    filteredBrand.forEach((brand) => {
      const filteredItems = products.filter((product) => product.Brand.toLowerCase() === brand);
      filteredProducts.push(filteredItems);
    });
  }

  const filteredProductData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    return filteredProducts.flat().slice(firstPageIndex, lastPageIndex);
  }, [filteredProducts, currentPage]);

  const onPageChange = (onPage) => {
    setSearchParams((prev) => ({ ...prev, page: onPage, brand: [...filteredBrand] }));
  };

  if (!products.length && !filteredProducts.flat().length) {
    return <div>Not Found</div>;
  } else if (filteredProducts.flat().length) {
    return (
      <section className="md:ml-[4.5rem] md:my-8">
        <div className="md:grid md:grid-cols-[repeat(3,_250px)] md:gap-9 mb-7">
          {filteredProductData.map((product) => {
            return <Card product={product} key={uuidv4()} />;
          })}
        </div>

        <div>
          <Pagination
            currentPage={currentPage}
            totalCount={filteredProducts.flat().length}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </div>
      </section>
    );
  } else {
    return (
      <section className="md:ml-[4.5rem] md:my-8">
        <div className="md:grid md:grid-cols-[repeat(3,_250px)] md:gap-9 mb-7">
          {currentProductData.map((product) => {
            return <Card product={product} key={uuidv4()} />;
          })}
        </div>

        <div>
          <Pagination
            currentPage={currentPage}
            totalCount={products.length}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </div>
      </section>
    );
  }
};

ProductDisplay.propTypes = {
  data: PropTypes.any || PropTypes.array,
};

export default ProductDisplay;
