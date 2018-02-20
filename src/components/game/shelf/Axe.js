import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">AXE</h4>
    <p className="game__text">You picked up the axe.</p>
    <button className="btn" onClick={() => props.handleAddEvent("shelf")}>
      Nice.
    </button>
  </div>
);
