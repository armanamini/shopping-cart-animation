import { useReducer } from "react";
import React from "react";
import CartContext from "./cart-context";

const defaultCartContext = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.items.price * action.items.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.items.id
    );
    const existinCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existinCartItem) {
      const updatedItem = {
        ...existinCartItem,
        amount: existinCartItem.amount + action.items.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.items);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existinItem = state.items[existingCartItemIndex];
     const updatedTotalAmount = state.totalAmount - existinItem.price 
     let updatedItems;
     if(existinItem.amount === 1){
    updatedItems = state.items.filter(item=> item.id !== action.id);
  }else{
    const updatedItem = {...existinItem, amount: existinItem.amount - 1};
    updatedItems = [...state.items];
    updatedItems[existingCartItemIndex] = updatedItem;

  }
    return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,

    }
  }
  return defaultCartContext;
};

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartContext);

  const addItemToCartHandler = (item) => {
    cartDispatch({
      type: "ADD",
      items: item,
    });
  };
  const removeItemOfCartHandler = (id) => {
    cartDispatch({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemOfCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
