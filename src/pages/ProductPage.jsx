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
    <div className="min-h-screen flex justify-center">
      <div className="w-[90%] md:flex md:flex-row md:justify-center md:gap-10">
        <img
          src={imgUrl}
          alt="Product"
          className="block md:w-[380px] md:h-[380px] lg:w-[500px] lg:h-[500px] my-5"
        />

        <div className="my-5 md:w-[70%] lg:w-[50%]">
          <h2 className="text-xl font-semibold">{item.Name}</h2>
          <p className="text-lg text-red-700 font-semibold mb-4">
            {'\u0024'}
            {item.Price}
          </p>

          <p className="mb-3">{item.Description}</p>

          <div className="mb-4">
            <label htmlFor="quantity" className="mb-1 block">
              Quantity
            </label>

            <div className="flex flex-row jusitify-between items-center">
              <button
                type="button"
                onClick={decreaseQuantity}
                className={`px-[0.8rem] py-[0.4rem] bg-white focus:outline-none ${quantity === 0 ? 'opacity-25 pointer-events-none' : ''}`}
              >
                <MinusCircle className="w-[1.5rem] h-[1.5rem] text-gray-800" />
              </button>

              <input
                type="text"
                name="quantity"
                id="quantity"
                value={quantity}
                aria-label="quantity"
                onKeyDown={inputOnlyNumber}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="px-4 py-2 w-[4rem] rounded-md text-center bg-white"
              />

              <button
                type="button"
                onClick={increaseQuantity}
                className="px-[0.8rem] py-[0.4rem] bg-white focus:outline-none"
              >
                <PlusCircle className="w-[1.5rem] h-[1.5rem] text-gray-800" />
              </button>
            </div>
          </div>

          {!isAdded ? (
            <button
              type="button"
              onClick={() => {
                addProduct({ ...item }, quantity);
                setIsAdded(true);
              }}
              className={`${quantity === 0 ? 'opacity-25 pointer-events-none' : ''}`}
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
      </div>
    </div>
  );
};

ProductPage.propTypes = {
  addProduct: PropTypes.any || PropTypes.func,
  shoppingCart: PropTypes.array,
  updateProduct: PropTypes.any || PropTypes.func,
  removeProduct: PropTypes.any || PropTypes.func,
};

export default ProductPage;
