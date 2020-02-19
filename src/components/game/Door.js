import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">THE DOOR</h4>
    <p className="game__text">
      You get closer to the outline of a door. Immediately, you grab the door
      handle and realize that the door is actually moving.
    </p>
    <p className="game__text">
      After a few seconds, the door is wide open. You see trees of green, red
      roses too. I see them bloom, for me and you.
    </p>
    <span className="game__question">And you think to yourself...</span>
    <br />
    <button className="btn" onClick={() => props.handleAddEvent("death-excited")}>
      What a wonderful world!
    </button>
    <button className="btn" onClick={() => props.handleAddEvent("victory-easy")}>
      ...wait, what?
    </button>
    <button className="btn" onClick={() => props.handleAddEvent("beginning")}>
      Nice try, I'm not falling for that!
    </button>
  </div>
);
