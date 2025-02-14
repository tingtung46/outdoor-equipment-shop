import { useRef, useEffect, useState } from 'react';
import Router from './Router';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addProduct = (product, quantity) => {
    setShoppingCart((prevState) => [...prevState, { ...product, quantity }]);
    toast.success('Successfully added to cart');
  };

  const updateProductQuantity = (productId, quantity) => {
    setShoppingCart((prevState) =>
      prevState.map((item) => (item.Id === productId ? { ...item, quantity: quantity } : item)),
    );
    toast.success('Successfully updated product quantity');
  };

  const removeProduct = (product) => {
    setShoppingCart((prevState) => prevState.filter((item) => item.Id !== product.Id));
    toast.success('Successfully removed product from cart');
  };

  const firstRender = useRef(true);

  useEffect(() => {
    if (!Storage) return;

    if (firstRender.current) {
      const shoppingCart = localStorage.getItem('shoppingCart');
      if (shoppingCart) setShoppingCart(JSON.parse(shoppingCart));

      return () => {
        firstRender.current = false;
      };
    }

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  return (
    <>
      <Router
        addProduct={addProduct}
        removeProduct={removeProduct}
        updateProductQuantity={updateProductQuantity}
        shoppingCart={shoppingCart}
      />

      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
