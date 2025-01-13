import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import Pagination from './Pagination';
import PropTypes from 'prop-types';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getData } from '../utils/productDisplayManager';

let pageSize = 9;

const ProductDisplay = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const navigate = useNavigate();
  const { category } = useParams();

  const products = getData(category);

  const onPageChange = (onPage) => {
    setSearchParams({ page: onPage });
    navigate(`/shop-page/${category}?page=${encodeURIComponent(onPage)}`);
  }

  const currentProductData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    return products.slice(firstPageIndex, lastPageIndex);
  }, [products, currentPage]);

  return (
    <>
      {!currentProductData.length ?
        (<div>Not Found</div>) :
        (
          <section>
            <div>
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
        )
      }
    </>
  );
};

ProductDisplay.propTypes = {
  data: PropTypes.any || PropTypes.array,
};

export default ProductDisplay;
