import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">BARRELS</h4>
    <p className="game__text">
      You approach the steel barrels. Shortly after you smell a familliar odor coming
      out of them - they are most likely filled with petrol.
    </p>
    <p className="game__text">
      Through a tiny, round hole on top of one of the barrels you see that it is
      filled with the liquid to the brim.
    </p>
    <span className="game__question">What now, huh?</span>
    <br />
    <button 
      className="btn"
      onClick={() => props.handleAddEvent("barrels-spill")}
    >
      Spill the fuel on the room's floor
    </button>
    {props.equipment.includes("Axe") && (
      <button
        className="btn btn--craft"
        onClick={() => props.handleAddEvent("death-barrels-axe")}
      >
        Strike the barrel with the axe
      </button>
    )}
    {props.equipment.includes("Gun") && (
      <button
        className="btn btn--craft"
        onClick={() => props.handleAddEvent("death-barrels-gun")}
      >
        Shoot the barrel with your gun
      </button>
    )}
    {props.equipment.includes("Flask") && !props.equipment.includes("Fuel") && (
      <button
        className="btn btn--craft"
        onClick={() => {
          props.handleAddItem("Fuel");
          props.handleAddEvent("barrels-fillflask");
          
        }}
      >
        Fill the flask with fuel
      </button>
    )}
    {
      !props.equipment.includes("Vacuum cleaner") && 
      (<button className="btn" onClick={() => {
      props.handleAddEvent("barrels-moveaside");
      props.handleAddItem("Vacuum cleaner")}
    }>
      Move the barrels aside to see what's behind them
    </button>
    )
    }
    <button className="btn" onClick={() => props.handleAddEvent("beginning")}>
      Go back
    </button>
  </div>
);
