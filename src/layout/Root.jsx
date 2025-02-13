import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const Root = ({ shoppingCart }) => {
  return (
    <>
      <section className="mx-auto my-0 max-w-7xl">
        <Header shoppingCart={shoppingCart} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </section>
    </>
  );
};

Root.propTypes = {
  shoppingCart: PropTypes.array,
};

export default Root;
