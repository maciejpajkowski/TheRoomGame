import React from "react";
import CharacterInfo from "./CharacterInfo";
import GameOperator from "./GameOperator";

export default class GameContainer extends React.Component {
  state = {
    equipment: []
  };

  handleAddItem = item => {
    this.setState(() => ({
      equipment: [...this.state.equipment, item]
    }));
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
            handleReset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}
