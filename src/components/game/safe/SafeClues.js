import React from "react";
// USE THE PICKLE HERE
export default props => (
  <div className="game__element">
    <h4 className="game__header">LOOKING FOR CLUES</h4>
    <p className="game__text">
      You take a closer look at the safe from all sides. Near the ground you
      notice a small text, carved in the metal. Unfortunately, you are unable to
      see what's written there. It's too dark.
    </p>
    <span className="game__question">Ok, now what?</span>
    <br />
    <button className="btn">Eat the Pickle</button>
    <button className="btn" onClick={() => props.handleAddEvent("beginning")}>
      Go back
    </button>
  </div>
);
