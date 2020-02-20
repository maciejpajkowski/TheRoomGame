import React from "react";

export default props => (
  <div className="game__element">
    <h4 className="game__header">ENTER A CODE</h4>
    <p className="game__text">
        There's a small keypad on the safe's door. Apparently, 4 digits are needed to open the safe.
    </p>
    <div>
        <input id="safe-input-1" type="text" pattern="\d*" maxLength="1" />
        <input id="safe-input-2" type="text" pattern="\d*" maxLength="1" />
        <input id="safe-input-3" type="text" pattern="\d*" maxLength="1" />
        <input id="safe-input-4" type="text" pattern="\d*" maxLength="1" />
    </div>
    <span className="game__question">Aaand?</span>
    <br />
    <button className="btn" onClick={() => props.handleAddEvent("safe")}>
        Ehh, go back
    </button>
    <button className="btn" onClick={() => {
        if (document.getElementById("safe-input-1").value === "9" &&
        document.getElementById("safe-input-2").value === "8" &&
        document.getElementById("safe-input-3").value === "0" &&
        document.getElementById("safe-input-4").value === "0") {
            props.handleAddEvent("safe-open")
        }
    }}>
        Try to the open the safe
    </button>
  </div>
);
