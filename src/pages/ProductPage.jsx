import { MinusCircle, PlusCircle } from 'lucide-react';
import PropTypes from 'prop-types';
import { getProductImage } from '../utils/getImage';
import { useState } from 'react';

const ProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const imgUrl = getProductImage(product.Id);

  const inputOnlyNumber = (e) => {
    if (NaN(e.key)) e.preventDefault;
  };

  return (
    <>
      <img src={imgUrl} alt="Product" />

      <div>
        <div>
          <h2>{product.Name}</h2>
          <p>{product.Price}</p>
        </div>

        <p>{product.Description}</p>

        <div>
          <label htmlFor="quantity">Quantity</label>

          <button type="button">
            <MinusCircle />
          </button>
          <input
            type="text"
            name="quantity"
            id="quantity"
            value={quantity}
            aria-label='quantity'
            onKeyDown={inputOnlyNumber}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button type="button">
            <PlusCircle />
          </button>
        </div>

        <button type="button">Add to Cart</button>
      </div>
    </>
  );
};

ProductPage.propTypes = {
  product: PropTypes.any || PropTypes.object,
};

export default ProductPage;
