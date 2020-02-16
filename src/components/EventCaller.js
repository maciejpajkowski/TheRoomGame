// Actual game events handling is in this file.

import React from "react";
import uuid from "uuid";
import Beginning from "./game/Beginning";
import Barrels from "./game/Barrels";
import AlchemyTable from "./game/AlchemyTable";
import Shelf from "./game/Shelf";
import Toolbox from "./game/shelf/Toolbox";
import ToolboxPicked from "./game/shelf/ToolboxPicked";
import Axe from "./game/shelf/Axe";
import Jar from "./game/shelf/Jar";
import Safe from "./game/Safe";
import SafeClues from "./game/safe/SafeClues";
import Sofa from "./game/Sofa";
import SofaSearch from "./game/sofa/SofaSearch";
import Door from "./game/Door";
import Victory from "./game/Victory";
import Death from "./game/Death";

export default props => {
    switch (props.eventToCall) {
      case "beginning":
        return (
          <Beginning
            handleAddEvent={props.handleAddEvent}
            equipment={props.equipment}
            start={props.start}
            key={uuid()}
          />
        );

      case "alchemy":
        return (
          <AlchemyTable
            handleAddEvent={props.handleAddEvent}
            equipment={props.equipment}
            key={uuid()}
          />
        );

      case "shelf":
        return (
          <Shelf
            handleAddEvent={props.handleAddEvent}
            handleAddItem={props.handleAddItem}
            equipment={props.equipment}
            key={uuid()}
          />
        );

      case "shelf-axe":
        return <Axe handleAddEvent={props.handleAddEvent} key={uuid()} />;

      case "shelf-jar":
        return <Jar handleAddEvent={props.handleAddEvent} key={uuid()} />;

      case "shelf-toolbox":
        return (
          <Toolbox
            handleAddEvent={props.handleAddEvent}
            handleAddItem={props.handleAddItem}
            key={uuid()}
          />
        );

      case "toolbox-picked":
        return (
          <ToolboxPicked
            handleAddEvent={props.handleAddEvent}
            handleAddItem={props.handleAddItem}
            equipment={props.equipment}
            key={uuid()}
          />
        );

      case "safe":
        return (
          <Safe
            handleAddEvent={props.handleAddEvent}
            handleAddItem={props.handleAddItem}
            key={uuid()}
          />
        );

      case "safe-clues":
        return (
          <SafeClues
            handleAddEvent={props.handleAddEvent}
            handleAddItem={props.handleAddItem}
            equipment={props.equipment}
            key={uuid()}
          />
        );

      case "sofa":
        return (
          <Sofa
            handleAddEvent={props.handleAddEvent}
            handleAddItem={props.handleAddItem}
            key={uuid()}
          />
        );

      case "sofa-search":
        return (
          <SofaSearch handleAddEvent={props.handleAddEvent} key={uuid()} />
        );

      case "barrels":
        return (
          <Barrels
            handleAddEvent={props.handleAddEvent}
            equipment={props.equipment}
            key={uuid()}
          />
        );

      case "door":
        return <Door handleAddEvent={props.handleAddEvent} key={uuid()} />;

      case "death-excited":
        return (
          <Death
            handleAddEvent={props.handleAddEvent}
            deathtext="You got way too excited and had a heart attack. Oh well."
            key={uuid()}
          />
        );

      case "death-sleep":
        return (
          <Death
            handleAddEvent={props.handleAddEvent}
            deathtext="You slept so well that you entered a lucid dream inside a lucid dream inside a lucid dream inside a lucid dream inside a lucid dream inside a lucid dream. However, something went wrong and now you're in a limbo. You're pretty much a vegetable now."
            key={uuid()}
          />
        );

      case "death-barrel-axe":
        return (
          <Death
            handleAddEvent={props.handleAddEvent}
            deathtext="You struck the barrel with your axe. The fuel inside instantly exploded and destroyed the entire room and its contents. Yes, you too."
            key={uuid()}
          />
        );

      case "victory-easy":
        return (
          <Victory
            handleAddEvent={props.handleAddEvent}
            victorytext="...okay. That was pretty easy, wasn't it? Anyway, you leave the room and go home."
            key={uuid()}
          />
        );

      case "victory-ascend":
        return (
          <Victory
            handleAddEvent={props.handleAddEvent}
            victorytext="This voice in your head somehow advised you to eat The Pickle. Shortly after eating it, you quickly realized that it does not matter what we really achieve in the physical world. It is but an introduction to a whole new, spiritual realm, which we should strive to understand and control, to become something more. You realize that trying to escape the room is futile, thus you begin to meditate. After 5214 hours of meditating you achieve a complete spiritual form and are able to just walk through the room's wall. You are free, not only from the room, but physical boundaries altogether. You're pretty much a superhuman now."
            key={uuid()}
          />
        );

      default:
        props.handleResetState();
        props.handleReset();

        return (
          <Beginning
            handleAddEvent={props.handleAddEvent}
            equipment={props.equipment}
            start={props.start}
            key={uuid()}
          />
        );
    }
};