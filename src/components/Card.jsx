import PropTypes from 'prop-types';
import { getProductImage } from '../utils/getImage';

const Card = ({ product }) => {
  const imgUrl = getProductImage(product.Id);

  return (
    <>
      <div className="w-25 h-27">
        <img src={imgUrl} alt="Product" className="w-full h-full rounded-md" />

        <div className="flex justify-between">
          <p>{product.Name}</p>
          <p>
            {'\u0024'}
            {product.Price}
          </p>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  product: PropTypes.any || PropTypes.array
};

export default Card;
