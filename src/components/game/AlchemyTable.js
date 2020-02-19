import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">ALCHEMY TABLE</h4>
    <p className="game__text">
      You approach the alchemy table. There are a few empty flasks on it, along
      with some very simple tools and a heater.
    </p>
    <span className="game__question">Wanna do something?</span>
    <br />
    {!props.equipment.includes("Flask") && (<button
      className="btn"
      onClick={() => {
        props.handleAddEvent("alchemy-flask");
        props.handleAddItem("Flask");
      }}
    >
      Grab a flask from the table
    </button>
    )}
    {props.equipment.includes("Flask with fuel") && (
      <button
        className="btn btn--craft"
        onClick={() => props.handleAddEvent("death-alchemy-flaskwithfuel")}
      >
        Heat the fuel in the flask
      </button>
    )}
    {
    props.equipment.includes("Gun") && 
    props.equipment.includes("Screwdriver") && 
    props.equipment.includes("Nails") && 
    props.equipment.includes("Wire") && 
    props.equipment.includes("Spring") && 
    props.equipment.includes("Scrap") && 
    props.equipment.includes("'Mechatronics for Dummies' book") && 
    props.equipment.includes("Vacuum cleaner") && 
    props.equipment.includes("Flask with fuel") && 
    (
      <button
        className="btn btn--craft"
        onClick={() => props.handleAddEvent("victory-alchemy-buildrobot")}
      >
        BUILD A ROBOT!!!
      </button>
    )}
    <button className="btn" onClick={() => props.handleAddEvent("beginning")}>
      Step back
    </button>
  </div>
);
