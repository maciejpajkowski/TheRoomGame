import React from "react";
import uuid from "uuid";
import Beginning from "./game/Beginning";
import Barrels from "./game/Barrels";
import Shelf from "./game/Shelf";
import Toolbox from "./game/shelf/Toolbox";
import ToolboxPicked from "./game/shelf/ToolboxPicked";
import Axe from "./game/shelf/Axe";
import Jar from "./game/shelf/Jar";
import Sofa from "./game/Sofa";
import SofaSearch from "./game/sofa/SofaSearch";
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
                  equipment={this.props.equipment}
                  start={this.state.start}
                  key={uuid()}
                />
              );
            case "shelf":
              return (
                <Shelf
                  handleAddEvent={this.handleAddEvent}
                  handleAddItem={this.props.handleAddItem}
                  equipment={this.props.equipment}
                  key={uuid()}
                />
              );
            case "shelf-axe":
              return <Axe handleAddEvent={this.handleAddEvent} key={uuid()} />;
            case "shelf-jar":
              return <Jar handleAddEvent={this.handleAddEvent} key={uuid()} />;
            case "shelf-toolbox":
              return (
                <Toolbox
                  handleAddEvent={this.handleAddEvent}
                  handleAddItem={this.props.handleAddItem}
                  key={uuid()}
                />
              );
            case "toolbox-picked":
              return (
                <ToolboxPicked
                  handleAddEvent={this.handleAddEvent}
                  handleAddItem={this.props.handleAddItem}
                  equipment={this.props.equipment}
                  key={uuid()}
                />
              );
            case "sofa":
              return (
                <Sofa
                  handleAddEvent={this.handleAddEvent}
                  handleAddItem={this.props.handleAddItem}
                  key={uuid()}
                />
              );
            case "sofa-search":
              return (
                <SofaSearch handleAddEvent={this.handleAddEvent} key={uuid()} />
              );
            case "barrels":
              return (
                <Barrels
                  handleAddEvent={this.handleAddEvent}
                  equipment={this.props.equipment}
                  key={uuid()}
                />
              );
            case "door":
              return <Door handleAddEvent={this.handleAddEvent} key={uuid()} />;
            case "death-excited":
              return (
                <Death
                  handleAddEvent={this.handleAddEvent}
                  deathtext="You got way too excited and had a heart attack. Oh well."
                  key={uuid()}
                />
              );
            case "death-sleep":
              return (
                <Death
                  handleAddEvent={this.handleAddEvent}
                  deathtext="You slept so well that you entered a lucid dream inside a lucid dream inside a lucid dream inside a lucid dream inside a lucid dream inside a lucid dream. However, something went wrong and now you're in a limbo. You're pretty much a vegetable now."
                  key={uuid()}
                />
              );
            case "death-barrel-axe":
              return (
                <Death
                  handleAddEvent={this.handleAddEvent}
                  deathtext="You struck the barrel with your axe. The fuel inside instantly exploded and destroyed the entire room and its contents. Yes, you too."
                  key={uuid()}
                />
              );
            case "victory-easy":
              return (
                <Victory
                  handleAddEvent={this.handleAddEvent}
                  victorytext="...okay. That was pretty easy, wasn't it? Anyway, you leave the room and go home."
                  key={uuid()}
                />
              );
            case "victory-ascend":
              return (
                <Victory
                  handleAddEvent={this.handleAddEvent}
                  victorytext="This voice in your head somehow advised you to eat The Pickle. Shortly after eating it, you quickly realized that it does not matter what we really achieve in the physical world. It is but an introduction to a whole new, spiritual realm, which we should strive to understand and control, to become something more. You realize that trying to escape the room is futile, thus you begin to meditate. After 5214 hours of meditating you achieve a complete spiritual form and are able to just walk through the room's wall. You are free, not only from the room, but physical boundaries altogether. You're pretty much a superhuman now."
                  key={uuid()}
                />
              );
            default:
              this.setState(() => ({
                events: ["beginning"],
                start: true
              }));
              this.props.handleReset();
              return (
                <Beginning
                  handleAddEvent={this.handleAddEvent}
                  equipment={this.props.equipment}
                  start={this.state.start}
                  key={uuid()}
                />
              );
          }
        })}
      </div>
    );
  }
}
