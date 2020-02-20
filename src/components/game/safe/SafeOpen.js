import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">YOU OPENED THE SAFE</h4>
    <p className="game__text">
      The code worked! Inside the safe you find...
    </p>
    <p className="game__text">
      Some bits of metal scrap and a book titled "Mechatronics For Dummies". Uhhh...
    </p>
    <span className="game__question">Disappointing, eh?</span>
    <br />
    <button className="btn" onClick={() => 
        {
        props.handleAddEvent("beginning");
        props.handleAddItem("Scrap", "'Mechatronics For Dummies' book");
        }
    }>
      A bit, but I'll take it
    </button>
  </div>
);
