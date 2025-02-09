import { MinusCircle, PlusCircle, Trash2 } from 'lucide-react';
import { getProductImage } from '../utils/getImage';
import PropTypes from 'prop-types';

const CartItem = ({ item, updateProduct, removeProduct }) => {
  const image = getProductImage(item.Id);

  const inputOnlyNumber = (e) => {
    if (isNaN(e.key) && e.key !== 'Backspace') e.preventDefault();
  };

  const handleChange = (e) => {
    updateProduct(item.Id, Number(e.target.value));
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
      <div className="w-[90%] flex flex-row justify-center gap-6">
        <img
          src={image}
          alt="Product"
          className="block w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] my-5"
        />

        <div className="my-5 w-[80%] md:w-[70%] lg:w-[60%]">
          <p className="text-sm sm:text-md">{item.Brand}</p>

          <h3 className="text-md sm:text-xl font-semibold mb-3">{item.Name}</h3>

          <button
            type="button"
            onClick={() => removeProduct(item)}
            className="inline-block px-[0.8rem] py-[0.4rem] bg-white focus:outline-none"
          >
            <Trash2 className="w-[1.5rem] h-[1.5rem] text-red-800" />
          </button>
        </div>
      </div>

      <div className="w-[90%] md:w-[86%] lg:w-[75%] flex flex-row justify-between items-center sm:gap-10">
        <div className="mb-4">
          <label htmlFor="quantity" className="mb-1 block">
            Quantity
          </label>

          <div className="flex flex-row jusitify-between items-center">
            <button
              type="button"
              onClick={decreaseQuantity}
              className={`px-[0.8rem] py-[0.4rem] bg-white focus:outline-none ${item.quantity === 0 ? 'opacity-25 pointer-events-none' : ''}`}
            >
              <MinusCircle className="w-[1.5rem] h-[1.5rem] text-gray-800" />
            </button>
            <input
              type="text"
              name="quantity"
              id="quantity"
              value={item.quantity}
              aria-label="quantity"
              onKeyDown={inputOnlyNumber}
              onChange={handleChange}
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

        <div className="flex justify-between items-center gap-6">
          <p className="text-sm sm:text-md text-red-700 font-semibold">
            {'\u0024'}
            {item.Price}
          </p>

          <p className="text-md sm:text-lg text-neutral-700 font-bold">
            {'\u0024'}
            {Math.round(item.Price * item.quantity * 100) / 100}
          </p>
        </div>
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
