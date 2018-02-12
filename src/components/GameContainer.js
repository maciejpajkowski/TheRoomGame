import React from "react";
import CharacterInfo from "./CharacterInfo";
import GameOperator from "./GameOperator";

export default class GameContainer extends React.Component {
  state = {
    level: 1,
    health: 100,
    exp: 0,
    equipment: [],
    gold: 0
  };

  handleGainGold = goldAmount => {
    this.setState(prevState => ({
      gold: prevState.gold + goldAmount
    }));
  };

  handleAddItem = item => {
    this.setState(() => ({
      equipment: [...this.state.equipment, item]
    }));
  };

  render() {
    return (
      <div className="game-container">
        <div className="stats">
          <CharacterInfo
            level={this.state.level}
            health={this.state.health}
            exp={this.state.exp}
            equipment={this.state.equipment}
            gold={this.state.gold}
          />
        </div>
        <div className="game">
          <GameOperator
            level={this.state.level}
            health={this.state.health}
            exp={this.state.exp}
            equipment={this.state.equipment}
            gold={this.state.gold}
          />
        </div>
      </div>
    );
  }
}
