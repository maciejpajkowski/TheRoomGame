import React from "react";
import Equipment from "./Equipment";

export default class CharacterInfo extends React.Component {
  render() {
    return (
      <div className="game__element game__element--equipment">
        <h2 className="game__header">Equipment</h2>
        {this.props.equipment.length === 0 && (
          <p className="game__text">Your equipment is empty.</p>
        )}
        {this.props.equipment.map((element, index) => (
          <Equipment key={element} eqName={element} count={index} />
        ))}
      </div>
    );
  }
}
