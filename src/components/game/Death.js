import React from "react";

export default props => (
  <div className="game__element game__element--death">
    <h3 className="game__header game__header--death">YOU DIED</h3>
    {props.deathtext && <p className="game__text">{props.deathtext}</p>}
    <p className="game__text">
      Unfortunately, this means you died. Well played.
    </p>
    <span className="game__question">Sooo... what now?</span>
    <br />
    <button className="btn" onClick={() => props.handleAddEvent("default")}>
      TRY AGAIN
    </button>
    <button className="btn btn--crossed" disabled>
      What? That's unfair!
    </button>
  </div>
);
