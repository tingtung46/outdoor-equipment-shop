import { MinusCircle, PlusCircle } from 'lucide-react';
import PropTypes from 'prop-types';
import { getProductImage } from '../utils/getImage';
import data from '../data/catalog.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateCartBtn from '../components/UpdateCartBtn';

const ProductPage = ({ addProduct, shoppingCart, updateProduct, removeProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { product } = useParams();

  // Find item on cart when cart item is clicked from cart page and use it as flag
  const foundItem =
    shoppingCart.find((stuff) => stuff.Name.split(' ').join('-').toLowerCase() === product) || '';

  // Normally getting item for information on product page
  const item = data.find((stuff) => product === stuff.Name.split(' ').join('-').toLowerCase());
  const imgUrl = getProductImage(item.Id);

  useEffect(() => {
    if (foundItem) {
      setQuantity(foundItem.quantity);
      setIsAdded(true);
    }
  }, [foundItem]);

  const inputOnlyNumber = (e) => {
    if (!/[0-9]/.test(e.key)) e.preventDefault();
  };

  const decreaseQuantity = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
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

          <button type="button" onClick={decreaseQuantity}>
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
          <button type="button" onClick={increaseQuantity}>
            <PlusCircle />
          </button>
        </div>

        {!isAdded ? (
          <button
            type="button"
            onClick={() => {
              addProduct({ ...item }, quantity);
              setIsAdded(true);
            }}
          >
            Add to Cart
          </button>
        ) : (
          <UpdateCartBtn
            updateProduct={updateProduct}
            removeProduct={removeProduct}
            setIsAdded={setIsAdded}
            item={item}
            quantity={quantity}
          />
        )}
      </div>
    </>
  );
};

ProductPage.propTypes = {
  addProduct: PropTypes.any || PropTypes.func,
  shoppingCart: PropTypes.array,
  updateProduct: PropTypes.any || PropTypes.func,
  removeProduct: PropTypes.any || PropTypes.func,
};

export default ProductPage;
