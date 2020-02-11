import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">ALCHEMY TABLE</h4>
    <p className="game__text">
      You approach the alchemy table. There are a few empty flasks on it, along
      with some very simple tools and a heater.
    </p>
    <span className="game__question">Wanna do something?</span>
    <br />
    <button
      className="btn"
      onClick={() => props.handleAddEvent("death-excited")}
    >
      WIP
    </button>
    <button
      className="btn"
      onClick={() => props.handleAddEvent("victory-easy")}
    >
      WIP
    </button>
    <button className="btn" onClick={() => props.handleAddEvent("beginning")}>
      Step back
    </button>
  </div>
);
