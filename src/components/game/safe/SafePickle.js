import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">YOU ATE A LITTLE OF THE PICKLE</h4>
    <p className="game__text">
      You decided to eat a fragment of The Pickle. Suddenly, you felt dizzy. It granted you excellent (night) vision, strength, and good fortune amongst women. 
    </p>
    <p className="game__text">
      You took another look at the small text and notice that the code for the safe is probably 0086. 
      <br />
      <span className="game__text--hint">Hopefully it's not upside down.</span>
    </p>
    <span className="game__question">Cool?</span>
    <br />
    <button className="btn" onClick={() => props.handleAddEvent("safe")}>
      Cool.
    </button>
  </div>
);
