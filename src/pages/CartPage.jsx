import { v4 as uuidv4 } from 'uuid';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import emptyCart from '../images/heroImages/empty-cart.png';
import PropTypes from 'prop-types';

const CartPage = ({ shoppingCart, updateProduct, removeProduct }) => {
  const subTotalPrice =
    Math.round(shoppingCart.reduce((total, item) => item.Price * item.quantity + total, 0) * 100) /
    100;

  if (!shoppingCart.length) {
    return (
      <div className="flex flex-col items-center">
        <img src={emptyCart} alt="Empty Cart" />
        <p>The cart is empty</p>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen">
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

        <button type="button">Check Out</button>
      </div>
    );
  }
};

CartPage.propTypes = {
  shoppingCart: PropTypes.array,
  updateProduct: PropTypes.any || PropTypes.func,
  removeProduct: PropTypes.any || PropTypes.func,
};

export default CartPage;
