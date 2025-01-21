import { v4 as uuidv4 } from 'uuid';
import CartItem from '../components/CartItem';
import GetProductButton from '../components/GetProductButton';
import OrderSummary from '../components/OrderSummary';
import emptyCart from '../images/heroImages/empty-cart.png';
import PropTypes from 'prop-types';

const CartPage = ({ shoppingCart, updateProduct, removeProduct }) => {
  console.log(shoppingCart)
  if (!shoppingCart.length) {
    return (
      <div>
        <img src={emptyCart} alt="Empty Cart" />
        <p>The cart is empty</p>
      </div>
    );
  } else {
    return (
      <>
        <section>
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

        <GetProductButton />
        <OrderSummary />

        <button type="button">Check Out</button>
      </>
    )
  }
};

CartPage.propTypes = {
  shoppingCart: PropTypes.array,
  updateProduct: PropTypes.any || PropTypes.func,
  removeProduct: PropTypes.any || PropTypes.func,
};

export default CartPage;
