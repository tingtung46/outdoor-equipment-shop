import { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import Pagination from './Pagination';
import PropTypes from 'prop-types';

let pageSize = 9;

const ProductDisplay = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentProductData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    return data.slice(firstPageIndex, lastPageIndex);
  }, [data, currentPage]);

  return (
    <>
      <section>
        <div>
          {currentProductData.map((product) => {
            return (
              <>
                <Card
                  key={uuidv4()}
                  img={`./images/products/${product.Id}.webp`}
                  title={product.Name}
                  price={product.Price}
                />
              </>
            );
          })}
        </div>

        <div>
          <Pagination
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>
    </>
  );
};

ProductDisplay.propTypes = {
  data: PropTypes.any || PropTypes.array,
};

export default ProductDisplay;
