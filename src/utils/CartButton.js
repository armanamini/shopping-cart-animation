import React from "react";
import Cart from "../images/Cart.png";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./CartButton.module.css";
import { useEffect } from "react";

const CartButton = (props) => {
  const [btnHL, setBtnHL] = React.useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const numberOfCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${btnHL ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHL(true);
    const Timer = setTimeout(() => {
      setBtnHL(false);
    }, 300);

    return () => {
      clearTimeout(Timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span>
        <img width={30} height={30} src={Cart} alt='ok'/>
      </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
