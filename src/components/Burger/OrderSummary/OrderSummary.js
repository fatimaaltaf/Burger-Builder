import React from "react";

import Aux from "../../../hoc/Aux";
import "./OrderSummary.css";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <button className="Danger" onClick={props.purchaseCanceled}>
        Cancel
      </button>
      <button className="Success" onClick={props.purchaseContinued}>
        Continue
      </button>
    </Aux>
  );
};

export default OrderSummary;
