import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">FLASK</h4>
    <p className="game__text">You picked up a small flask.</p>
    <button className="btn" onClick={() => props.handleAddEvent("alchemy")}>
      Hopefully it will be useful!
    </button>
  </div>
);
