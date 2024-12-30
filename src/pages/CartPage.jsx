import { v4 as uuidv4 } from 'uuid';
import CartItem from '../components/CartItem';
import GetProductButton from '../components/GetProductButton';
import OrderSummary from '../components/OrderSummary';

const CartPage = ({ shoppingCart }) => {
  <>
    <section>
      {shoppingCart.map((query) => {
        return <CartItem key={uuidv4()} query={query} />;
      })}
    </section>

    <GetProductButton />
    <OrderSummary />

    <button type="button">Check Out</button>
  </>;
};

export default CartPage;
