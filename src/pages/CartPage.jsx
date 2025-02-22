import { v4 as uuidv4 } from 'uuid';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import emptyCart from '../images/heroImages/empty-cart.png';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';

const CartPage = ({ shoppingCart, updateProduct, removeProduct }) => {
  const subTotalPrice =
    Math.round(shoppingCart.reduce((total, item) => item.Price * item.quantity + total, 0) * 100) /
    100;

  if (!shoppingCart.length) {
    return (
      <div className="flex flex-col items-center min-h-screen">
        <img src={emptyCart} alt="Empty Cart" className="mb-5" />
        <p>The cart is empty</p>
      </div>
    );
  } else {
    return (
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        className="min-h-screen"
      >
        <section className="flex flex-col items-center">
          {shoppingCart.map((item) => {
            return (
              <CartItem
                key={uuidv4()}
                item={item}
                updateProduct={updateProduct}
                removeProduct={removeProduct}
              />
            );
          })}
        </section>

        <OrderSummary subTotal={subTotalPrice} />

        <div className="flex justify-center mb-8">
          <div className="flex justify-end w-[90%] lg:w-[83%]">
            <button type="button" className="focus:outline-none">
              Proceed to checkout
            </button>
          </div>
        </div>
      </motion.div>
    );
  }
};

CartPage.propTypes = {
  shoppingCart: PropTypes.array,
  updateProduct: PropTypes.any || PropTypes.func,
  removeProduct: PropTypes.any || PropTypes.func,
};

export default CartPage;
