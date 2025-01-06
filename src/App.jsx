import { useEffect, useRef, useState } from "react";
import ShopPage from "./pages/ShopPage";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addProduct = ({ product, quantity }) => {
    setShoppingCart((prevState) => ([...prevState, { product, quantity }]));
  };

  const updateProductQuantity = (productId, quantity) => {
    setShoppingCart((prevState) => (prevState.map((item) => {
      item.product.id === productId ? { ...item, quantity } : item;
    })));
  };

  const removeProduct = (product) => {
    setShoppingCart((prevState) => (prevState.filter((item) => {
      item.product.id !== product.id;
    })));
  };

  const firstRender = useRef(true);

  useEffect(() => {
    if (!Storage) return;

    if (firstRender.current) {
      const shoppingCart = localStorage.getItem('shoppingCart');
      if (shoppingCart) setShoppingCart(JSON.parse(shoppingCart));

      return () => {
        firstRender.current = false;
      }
    }

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }, [shoppingCart.length]);

  return (
    <>
      <ShopPage />
    </>
  );
}

export default App;
