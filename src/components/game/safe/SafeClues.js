import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">LOOKING FOR CLUES</h4>
    <p className="game__text">
      You take a closer look at the safe from all sides. Near the ground you
      notice a small text, carved in the metal. Unfortunately, you are unable to
      see what's written there. It's too dark in there.
    </p>
    <span className="game__question">Ok, now what?</span>
    <br />
    {props.equipment.includes("The Pickle") && (
      <button
        className="btn btn--craft"
        onClick={() => {
          props.handleAddEvent("safe-clues-pickle")
          }}
      >
        Eat a fragment of The Pickle
      </button>
    )}
    <button className="btn" onClick={() => props.handleAddEvent("safe")}>
      Go back
    </button>
  </div>
);
