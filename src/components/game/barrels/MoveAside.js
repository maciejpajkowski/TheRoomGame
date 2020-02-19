import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">MOVE THE BARRELS ASIDE</h4>
    <p className="game__text">You moved the barrels and found a fairly new vacuum cleaner.</p>
    <button className="btn" onClick={() => props.handleAddEvent("barrels")}>
        ...lol, ok
    </button>
  </div>
);
