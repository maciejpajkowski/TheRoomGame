import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">SHELF</h4>
    <p className="game__text">
      You take a look at the shelf's contents. On it you find:
    </p>
    <ul>
      {props.equipment.includes("The Pickle") &&
        props.equipment.includes("Axe") &&
        props.equipment.includes("Gun") && (
          <p>Absolutely nothing. Haven't you taken enough?</p>
        )}
      {!props.equipment.includes("The Pickle") && (
        <li>A small jar with an unknown substance</li>
      )}
      {!props.equipment.includes("Axe") && <li>A little axe</li>}
      {!props.equipment.includes("Gun") && <li>A toolbox</li>}
    </ul>
    <span className="game__question">So, what are you going to do now?</span>
    <br />
    {!props.equipment.includes("The Pickle") && (
      <button
        className="btn"
        onClick={() => {
          props.handleAddEvent("shelf-jar");
          props.handleAddItem("The Pickle");
        }}
      >
        Pick the jar and open it to see what's inside
      </button>
    )}
    {!props.equipment.includes("Axe") && (
      <button
        className="btn"
        onClick={() => {
          props.handleAddEvent("shelf-axe");
          props.handleAddItem("Axe");
        }}
      >
        Grab the axe
      </button>
    )}
    {!props.equipment.includes("Gun") && (
      <button
        className="btn"
        onClick={() => props.handleAddEvent("shelf-toolbox")}
      >
        Open the toolbox
      </button>
    )}
    <button className="btn" onClick={() => props.handleAddEvent("beginning")}>
      Go back
    </button>
  </div>
);
