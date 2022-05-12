import React, { useContext } from "react";

//? REDUCER
import { GlobalContext } from "../App";
import { actionsTypes } from "../reducer/index";

//? STYLES
import { Button } from "./styles/orderButton.SC";

function OrderButton({ value, text }) {
  const globalContext = useContext(GlobalContext);
  const order = globalContext.state.order;

  const handleClick = () => {
    globalContext.dispatch({ type: actionsTypes.SET_ORDER, payload: value });
  };

  return (
    <Button value={value} onClick={handleClick} active={order === value}>
      {text}
    </Button>
  );
}

export default OrderButton;
