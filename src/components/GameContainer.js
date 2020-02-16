import React from "react";
import CharacterInfo from "./CharacterInfo";
import GameOperator from "./GameOperator";

export default class GameContainer extends React.Component {
  state = {
    equipment: []
  };

  handleAddItem = (...args) => {
    this.setState(() => ({
      equipment: [...this.state.equipment, ...args]
    }));
  };

  handleRemoveItem = (itemToRemove) => {
    if (this.state.equipment.indexOf(itemToRemove) !== -1)
    {
      var array = this.state.equipment.slice(0);
      const index = array.indexOf(itemToRemove);
      array.splice(index, 1);

      this.setState(() => ({
        equipment: [...array]
      }));
    }
  };

  handleReset = () => {
    this.setState(() => ({
      equipment: []
    }));
  };

  render() {
    return (
      <div className="game-container">
        <div className="equipment">
          <CharacterInfo equipment={this.state.equipment} />
        </div>
        <div className="game">
          <GameOperator
            equipment={this.state.equipment}
            handleAddItem={this.handleAddItem}
            handleRemoveItem={this.handleRemoveItem}
            handleReset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}
