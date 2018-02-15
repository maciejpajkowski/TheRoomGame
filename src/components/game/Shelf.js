import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">SHELF</h4>
    <p className="game__text">
      You take a look at the shelf's contents. On it you find:
    </p>
    <ul>
      <li>A small jar with an unknown substance</li>
      <li>A little axe</li>
      <li>A toolbox</li>
    </ul>
    <span className="game__question">So, what are you going to do now?</span>
    <br />
    <button className="btn" onClick={() => this.handleAddEvent("jar")}>
      Pick the jar and open it to see what's inside
    </button>
    <button className="btn">Grab the axe</button>
    <button className="btn">Open the toolbox</button>
    <button className="btn" onClick={() => props.handleAddEvent("beginning")}>
      Go back
    </button>
  </div>
);
