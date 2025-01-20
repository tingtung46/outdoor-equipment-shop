import Root from './layout/Root';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import ShopPage from './pages/ShopPage';
import ProductDisplay from './components/ProductDisplay';
import ProductPage from './pages/ProductPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Router = ({ addProduct, removeProduct, updateProductQuantity, shoppingCart }) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'cart', element: <CartPage /> },
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

export default Router;
