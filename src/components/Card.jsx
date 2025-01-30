import PropTypes from 'prop-types';
import { getProductImage } from '../utils/getImage';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  const imgUrl = getProductImage(product.Id);

  return (
    <>
      <div className="w-25 h-27 border-2 border-neutral-300 rounded-xl p-3 shadow-md bg-white">
        <Link to={`/product/${product.Param}/${product.Name.split(' ').join('-').toLowerCase()}`}>
          <div>
            <img src={imgUrl} alt="Product" className="w-full h-full rounded-md mb-2" />
            <div className="flex justify-between md:text-sm">
              <p>{product.Name}</p>
              <p>
                {'\u0024'}
                {product.Price}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

Card.propTypes = {
  product: PropTypes.any || PropTypes.array,
};

export default Card;
