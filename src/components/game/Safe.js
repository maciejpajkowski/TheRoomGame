import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">SAFE</h4>
    <p className="game__text">
      You approach the safe. It's locked, made of strong steel, and its walls
      are thick and heavy. There's a lock in the middle of the door.
    </p>
    <span className="game__question">Any thoughts?</span>
    <br />
    <button className="btn">Enter a code</button>
    <button className="btn">Look for clues on the safe</button>
    <button className="btn" onClick={() => props.handleAddEvent("beginning")}>
      Go back
    </button>
  </div>
);
