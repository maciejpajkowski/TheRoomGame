import React from "react";

export default props => (
  <div className="game__element game__element--start">
    <h4 className="game__header">THE ROOM</h4>
    {props.start && (
      <p className="game__text">
        You wake up in a chair in a spacious, modern looking white room. You
        have no idea how you got here.
      </p>
    )}
    {!props.start && (
      <p className="game__text">You sit on the chair in the room.</p>
    )}
    <p className="game__text">
      In front of you there is a shelf with some things on it. To its left you
      see a big safe, and next to it, in the corner of the room, there are a few
      steel barrels, looking rather new. To the right of the shelf you notice an
      outline of a door and a door handle.
    </p>
    <p className="game__text">
      Directly to your left you see a well equipped alchemy table. To your right
      you notice a very comfortable-looking sofa in the corner of the room. Behind 
      your chair is nothing, but the room's wall.
    </p>
    <span className="game__question">What would you like to do?</span>
    <br />
    <button onClick={() => props.handleAddEvent("shelf")} className="btn">
      Check out what's on the shelf
    </button>
    {!props.equipment.includes("Scrap") && !props.equipment.includes("'Mechatronics For Dummies' book") && (
      <button onClick={() => props.handleAddEvent("safe")} className="btn">
        Take a look at the safe
      </button>
    )}
    
    <button onClick={() => props.handleAddEvent("barrels")} className="btn">
      Approach the barrels
    </button>
    <button onClick={() => props.handleAddEvent("door")} className="btn">
      Try to open the door
    </button>
    {!props.equipment.includes("Spring") && (
      <button onClick={() => props.handleAddEvent("sofa")} className="btn">
        Lie down on the sofa
      </button>
    )}
    <button onClick={() => props.handleAddEvent("alchemy")} className="btn">
      Move to the alchemy table
    </button>
  </div>
);
