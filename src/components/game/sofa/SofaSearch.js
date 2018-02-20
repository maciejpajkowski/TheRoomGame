import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">SOFA</h4>
    <p className="game__text">
      You butchered the sofa, rendering it completely unusable.
    </p>
    <p className="game__text">At least, in the process you found a spring!</p>
    <button className="btn" onClick={() => props.handleAddEvent("beginning")}>
      Go back
    </button>
  </div>
);
