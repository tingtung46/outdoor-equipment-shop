import { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import Pagination from './Pagination';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getData } from '../utils/productDisplayManager';

let pageSize = 9;

const ProductDisplay = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { category } = useParams();

  const products = getData(category);

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
                onPageChange={(page) => setCurrentPage(page)}
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
