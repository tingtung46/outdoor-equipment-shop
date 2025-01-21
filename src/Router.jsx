import Root from './layout/Root';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import ShopPage from './pages/ShopPage';
import ProductDisplay from './components/ProductDisplay';
import ProductPage from './pages/ProductPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PropTypes from 'prop-types';

const Router = ({ addProduct, removeProduct, updateProductQuantity, shoppingCart }) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        {
          path: 'cart',
          element: (
            <CartPage
              shoppingCart={shoppingCart}
              updateProduct={updateProductQuantity}
              removeProduct={removeProduct}
            />
          ),
        },
        {
          path: 'shop-page',
          element: <ShopPage />,
          children: [{ path: ':category', element: <ProductDisplay /> }],
        },
        {
          path: 'product/:category/:product',
          element: (
            <ProductPage
              addProduct={addProduct}
              shoppingCart={shoppingCart}
              updateProduct={updateProductQuantity}
              removeProduct={removeProduct}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

Router.propTypes = {
  addProduct: PropTypes.any || PropTypes.func,
  removeProduct: PropTypes.any || PropTypes.func,
  updateProductQuantity: PropTypes.any || PropTypes.func,
  shoppingCart: PropTypes.array,
};

export default Router;
