import { v4 as uuidv4 } from 'uuid';
import CartItem from '../components/CartItem';
import GetProductButton from '../components/GetProductButton';
import OrderSummary from '../components/OrderSummary';
import PropTypes from 'prop-types';

const CartPage = ({ shoppingCart, updateProduct, removeProduct }) => {
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
  );
};

CartPage.propTypes = {
  shoppingCart: PropTypes.array,
  updateProduct: PropTypes.any || PropTypes.func,
  removeProduct: PropTypes.any || PropTypes.func,
};

export default CartPage;
