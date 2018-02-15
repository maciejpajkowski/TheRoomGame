import React from "react";
import Beginning from "./game/Beginning";
import Shelf from "./game/Shelf";
import Sofa from "./game/Sofa";
import Door from "./game/Door";
import Victory from "./game/Victory";
import Death from "./game/Death";

export default class GameOperator extends React.Component {
  state = {
    events: ["beginning"],
    start: true
  };

  handleAddEvent = string => {
    this.setState(() => ({
      events: [string],
      start: false
    }));
  };

  render() {
    return (
      <div>
        {this.state.events.map(ev => {
          switch (ev) {
            case "beginning":
              return (
                <Beginning
                  handleAddEvent={this.handleAddEvent}
                  start={this.state.start}
                />
              );
            case "shelf":
              return <Shelf handleAddEvent={this.handleAddEvent} />;
            case "sofa":
              return <Sofa handleAddEvent={this.handleAddEvent} />;
            case "door":
              return <Door handleAddEvent={this.handleAddEvent} />;
            case "death-excited":
              return (
                <Death
                  handleAddEvent={this.handleAddEvent}
                  deathtext="You got way too excited and had a heart attack. Oh well."
                />
              );
            case "victory-easy":
              return (
                <Victory
                  handleAddEvent={this.handleAddEvent}
                  victorytext="...okay. That was pretty easy, wasn't it? Anyway, you leave the room and go home."
                />
              );
            default:
              this.setState(() => ({
                events: ["beginning"],
                start: true
              }));
              return (
                <Beginning
                  handleAddEvent={this.handleAddEvent}
                  start={this.state.start}
                />
              );
          }
        })}
      </div>
    );
  }
}
