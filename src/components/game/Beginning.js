import React from "react";

export default props => (
  <div className="game__element game__element--town">
    <h5>TOWN</h5>
    <p>
      You arrive in Greenfield, a town near an old mine, which leads to
      dangerous dungeons. Rumor has it, that there are many treasures yet to be
      found.{" "}
    </p>
    <span>What would you like to do?</span>
    <br />
    <button onClick={() => props.handleAddEvent("enter-dungeon")}>
      Enter the dungeon
    </button>
    <button onClick={() => props.handleAddEvent("shop")}>Visit the shop</button>
    <button onClick={() => props.handleAddEvent("finish")}>
      Finish adventure
    </button>
  </div>
);
