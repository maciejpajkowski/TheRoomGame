import React from "react";

export default props => (
  <div className="game__element game__element--victory">
    <h2 className="game__header game__header--victory">YOU WIN!</h2>
    {props.victorytext && <p className="game__text">{props.victorytext}</p>}
    <p className="game__text">Congratulations! You did it!</p>
    <p className="game__text">
      You managed to escape the room and beat this dumb game!
    </p>
    <span className="game__question" />
    <button className="btn" onClick={() => props.handleAddEvent("default")}>
      I want to be locked up again!
    </button>
    <button className="btn btn--crossed" disabled>
      This game is stupid
    </button>
  </div>
);
