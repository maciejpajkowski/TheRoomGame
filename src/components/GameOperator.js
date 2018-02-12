import React from "react";
import uuid from "uuid";
import Beginning from "./game/Beginning";
import Shop from "./game/Shop";
import EnterDungeon from "./game/EnterDungeon";

export default class GameOperator extends React.Component {
  state = {
    events: ["beginning"]
  };

  handleAddEvent = string => {
    if (
      this.state.events.length < 10 &&
      this.state.events.indexOf(string) === -1
    ) {
      this.setState(() => ({
        events: [...this.state.events, string]
      }));
    } else if (
      this.state.events.length >= 10 &&
      this.state.events.indexOf(string) > -1
    ) {
      console.log(this.state.events);
      this.state.events.shift();
      this.setState(() => ({
        events: [...this.state.events, string]
      }));
    }
  };

  render() {
    return (
      <div>
        {this.state.events.map(ev => {
          switch (ev) {
            case "beginning":
              return (
                <Beginning key={uuid()} handleAddEvent={this.handleAddEvent} />
              );
            case "shop":
              return <Shop key={uuid()} />;
            case "enter-dungeon":
              return (
                <EnterDungeon
                  key={uuid()}
                  handleAddEvent={this.handleAddEvent}
                />
              );
            default:
              this.setState(() => ({
                events: ["beginning"]
              }));
              return (
                <Beginning key={uuid()} handleAddEvent={this.handleAddEvent} />
              );
          }
        })}
      </div>
    );
  }
}
