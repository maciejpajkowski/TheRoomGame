import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">JAR</h4>
    <p className="game__text">
      You take the jar and barely manage to open it. You quickly realize that
      there actually is something in it, not just an unknown substance. You
      reach for this mysterious thing with your fingers and pull out... a
      pickle. It's glowing and smells wonderfully. It's a fantastic pickle. You
      want it. You immediately take it and leave the jar and the weird substance
      in it alone. Pickle is love. Pickle is life.
    </p>
    <span className="game__question">Pickle?</span>
    <br />
    <button className="btn" onClick={() => props.handleAddEvent("shelf")}>
      Pickle.
    </button>
  </div>
);
