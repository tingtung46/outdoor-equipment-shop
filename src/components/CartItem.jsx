import { MinusCircle, PlusCircle } from 'lucide-react';
import { getProductImage } from '../utils/getImage'

const CartItem = ({ query }) => {
  const image = getProductImage(query.product.Id);

  const inputOnlyNumber = (e) => {
    if (NaN(e.key)) e.preventDefault;
  };

  return (
    <>
      <div>
        <img src={image} alt="Product" />

        <div>
          <div>
            <p>{query.product.Brand}</p>
            <p>sub total price</p>
          </div>

          <h3>{query.product.Name}</h3>

          <p>{query.product.Price}</p>

          <div>
            <label htmlFor="quantity">Quantity</label>

            <button type="button">
              <MinusCircle />
            </button>
            <input
              type="text"
              name="quantity"
              id="quantity"
              value={query.quantity}
              onKeyDown={inputOnlyNumber}
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

export default CartItem;
