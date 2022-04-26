import React from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../Modal/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount?.toFixed(2)}`;
  // const totalAmount = cartCtx.totalAmount;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = id =>{
    cartCtx.removeItem(id);
  }
  const cartItemAddHandler = item =>{
    cartCtx.addItem({...item, amount: 1});
  } 
  const cartItem = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.title} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div>
        <span style={{fontSize:'20px',marginLeft:"50px"}}>Total : </span>
        <span style={{fontSize:'20px',fontWeight:'bold'}}>{totalAmount}</span>
      </div>
      <div>
        <button onClick={props.onClose}>Close</button>
     {hasItems && <button>Order</button>}   
      </div>
    </Modal>
  );
};

export default Cart;
