// import Rectangle from './SVG/Rectangle';
import style from "./App.css";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import Rectangle from "./SVG/Rectangle";
import Product from "./components/Products/Product";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/Products/ProductDetails";

function App(props) {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <div className={style.container} style={{ overflow: "hidden" }}>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Rectangle />

        <Navbar onShowCart={showCartHandler} />

        <Routes>
          <Route path="/productDetails/:id" element={<ProductDetails />} />
        </Routes>
        <Product />
      </div>
    </CartProvider>
  );
}

export default App;
