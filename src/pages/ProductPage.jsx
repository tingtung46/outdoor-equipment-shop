import { MinusCircle, PlusCircle } from 'lucide-react';
import PropTypes from 'prop-types';
import { getProductImage } from '../utils/getImage';
import data from '../data/catalog.json';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { product } = useParams();
  const item = data
    .filter((stuff) => product === stuff.Name.split(' ').join('-').toLowerCase())
    .pop();
  const imgUrl = getProductImage(item.Id);

  const inputOnlyNumber = (e) => {
    if (!/[0-9]/.test(e.key)) e.preventDefault();
  };

  return (
    <>
      <img src={imgUrl} alt="Product" />

      <div>
        <div>
          <h2>{item.Name}</h2>
          <p>{item.Price}</p>
        </div>

        <p>{item.Description}</p>

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
            aria-label="quantity"
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
