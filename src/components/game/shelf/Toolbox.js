import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">TOOLBOX</h4>
    <p className="game__text">
      You look into the toolbox. In there you find a gun, a screwdriver, some
      nails and a wire.
    </p>
    <span className="game__question">What do you do?</span>
    <br />
    <button
      className="btn"
      onClick={() => {
        props.handleAddEvent("toolbox-picked");
        props.handleAddItem("Gun", "Screwdriver", "Nails", "Wire");
      }}
    >
      Take everything, I guess?
    </button>
    <button className="btn" onClick={() => props.handleAddEvent("shelf")}>
      Close the toolbox
    </button>
  </div>
);
