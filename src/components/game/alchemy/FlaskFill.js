import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">FILL FLASK</h4>
    <p className="game__text">You carefully poured some petrol into your flask.</p>
    <button className="btn" onClick={() => {
      props.handleAddEvent("barrels");
      props.handleRemoveItem("Flask");
      }}
      >
      Neat.
    </button>
  </div>
);
