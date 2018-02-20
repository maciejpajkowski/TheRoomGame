import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">SOFA</h4>
    <p className="game__text">
      You lie down on the sofa. It is pretty damn comfortable.
    </p>
    <span className="game__question">What now?</span>
    <br />
    <button className="btn" onClick={() => props.handleAddEvent("death-sleep")}>
      Take a short nap
    </button>
    <button
      className="btn"
      onClick={() => {
        props.handleAddEvent("sofa-search");
        props.handleAddItem("Spring");
      }}
    >
      Search the sofa for something useful
    </button>
    <button className="btn" onClick={() => props.handleAddEvent("beginning")}>
      Go back
    </button>
  </div>
);
