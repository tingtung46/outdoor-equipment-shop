import { MinusCircle, PlusCircle, Trash2 } from 'lucide-react';
import { getProductImage } from '../utils/getImage';
import PropTypes from 'prop-types';

const CartItem = ({ item, updateProduct, removeProduct }) => {
  const image = getProductImage(item.Id);

  const inputOnlyNumber = (e) => {
    if (!/[0-9]/.test(e.key)) e.preventDefault();
  };

  const handleChange = (e) => {
    updateProduct(item.Id, e.target.value);
  };

  const decreaseQuantity = () => {
    updateProduct(item.Id, item.quantity - 1);
  };

  const increaseQuantity = () => {
    updateProduct(item.Id, item.quantity + 1);
  };

  if (item.quantity === 0) removeProduct(item);

  return (
    <>
      <div>
        <img src={image} alt="Product" />

        <div>
          <div>
            <p>{item.Brand}</p>
            <p>
              {'\u0024'}
              {Math.round(item.Price * item.quantity * 100) / 100}
            </p>
          </div>

          <h3>{item.Name}</h3>

          <p>
            {'\u0024'}
            {item.Price}
          </p>

          <div>
            <label htmlFor="quantity">Quantity</label>

            <button type="button" onClick={decreaseQuantity}>
              <MinusCircle />
            </button>
            <input
              type="text"
              name="quantity"
              id="quantity"
              value={item.quantity}
              aria-label="quantity"
              onKeyDown={inputOnlyNumber}
              onChange={handleChange}
            />
            <button type="button" onClick={increaseQuantity}>
              <PlusCircle />
            </button>
          </div>
        </div>

        <button type="button" onClick={() => removeProduct(item)}>
          <Trash2 />
        </button>
      </div>
    </>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
  updateProduct: PropTypes.any || PropTypes.func,
  removeProduct: PropTypes.any || PropTypes.func,
};

export default CartItem;
