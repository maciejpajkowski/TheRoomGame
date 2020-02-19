import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">SPILL THE BARREL'S CONTENTS</h4>
    <p className="game__text">You knocked the barrel over. The fuel inside began to spill. Congratulations, now it's everywhere. And it smells!</p>
    <span className="game__question">Well done, m8</span>
    <br />
    <button className="btn" onClick={() => props.handleAddEvent("death-barrels-spill")}>
        Ughhh...
    </button>
  </div>
);
