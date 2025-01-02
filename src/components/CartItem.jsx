import { MinusCircle, PlusCircle } from 'lucide-react';
import { getProductImage } from '../utils/getImage'
import { useState } from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ query }) => {
  const [item, setItem] = useState(query);

  const image = getProductImage(item.Id);

  const inputOnlyNumber = (e) => {
    if (NaN(e.key)) e.preventDefault;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setItem(prevItem => ({
      ...prevItem,
      quantity: e.target.value,
    }))
  }

  return (
    <>
      <div>
        <img src={image} alt="Product" />

        <div>
          <div>
            <p>{item.Brand}</p>
            <p>sub total price</p>
          </div>

          <h3>{item.Name}</h3>

          <p>{item.Price}</p>

          <div>
            <label htmlFor="quantity">Quantity</label>

            <button type="button">
              <MinusCircle />
            </button>
            <input
              type="text"
              name="quantity"
              id="quantity"
              value={item.quantity}
              aria-label='quantity'
              onKeyDown={inputOnlyNumber}
              onChange={handleChange}
            />
            <button type="button">
              <PlusCircle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

CartItem.propTypes = {
  query: PropTypes.any || PropTypes.array,
};

export default CartItem;
