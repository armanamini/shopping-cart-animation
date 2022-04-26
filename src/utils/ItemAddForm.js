import React from "react";
import { useState } from "react";
import { useRef } from "react";
import AddShoppingCart from "../SVG/AddShoppingCart";
import Input from "./Input";

const ItemAddForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountAsNumber = +enteredAmount;
  if(enteredAmount.trim().length === 0 || enteredAmountAsNumber < 1 || enteredAmountAsNumber > 100){
    setAmountValid(false);
    return
  }
  props.onAddToCart(enteredAmountAsNumber);
}

  return (
    <form onSubmit={submitHandler}>
      <div style={{padding:'0 10px',border:'2px solid #59a09d',borderRadius:'30px',display:'flex',direction:'row'}}>
        <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "100",
          step: "1",
          defaultValue: "1",
        }}

      />
      <button style={{background:'transparent',border:'none',cursor:'pointer'}}><AddShoppingCart/></button>
      </div>
      
        {!amountValid && <p>Amount is not valid</p>}
    </form>
  );
};

export default ItemAddForm;
