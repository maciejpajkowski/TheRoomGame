// Actual game events handling is in this file.

import React from "react";
import uuid from "uuid";
import Beginning from "./game/Beginning";
import Barrels from "./game/Barrels";
import MoveAside from "./game/barrels/MoveAside";
import Spill from "./game/barrels/Spill"
import AlchemyTable from "./game/AlchemyTable";
import Flask from "./game/alchemy/Flask";
import Shelf from "./game/Shelf";
import Toolbox from "./game/shelf/Toolbox";
import ToolboxPicked from "./game/shelf/ToolboxPicked";
import Axe from "./game/shelf/Axe";
import Jar from "./game/shelf/Jar";
import Safe from "./game/Safe";
import SafeClues from "./game/safe/SafeClues";
import SafePickle from "./game/safe/SafePickle";
import SafeCode from "./game/safe/SafeCode";
import SafeOpen from "./game/safe/SafeOpen";
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
            handleAddItem={props.handleAddItem}
            equipment={props.equipment}
            key={uuid()}
          />
        );

      case "alchemy-flask":
        return (
          <Flask
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

      case "safe-clues-pickle":
      return (
        <SafePickle
          handleAddEvent={props.handleAddEvent}
          key={uuid()}
        />
      );

      case "safe-code":
      return (
        <SafeCode
          handleAddEvent={props.handleAddEvent}
          key={uuid()}
        />
      );

      case "safe-open":
      return (
        <SafeOpen
          handleAddEvent={props.handleAddEvent}
          handleAddItem={props.handleAddItem}
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
            handleAddItem={props.handleAddItem}
            equipment={props.equipment}
            key={uuid()}
          />
        );

      case "barrels-moveaside":
        return (
          <MoveAside
            handleAddEvent={props.handleAddEvent}
            key={uuid()}
          />
        );

      case "barrels-spill":
        return (
          <Spill
            handleAddEvent={props.handleAddEvent}
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

      case "death-barrels-axe":
        return (
          <Death
            handleAddEvent={props.handleAddEvent}
            deathtext="You struck the barrel with your axe. The fuel inside instantly exploded and destroyed the entire room and its contents. Yes, you too."
            key={uuid()}
          />
        );

      case "death-barrels-gun":
        return (
          <Death
            handleAddEvent={props.handleAddEvent}
            deathtext="You shoot the barrel with your gun. As you might have expected (that is, if you played any games where barrels explode when shot), the fuel inside instantly exploded and destroyed the entire room and its contents. Yes, you too."
            key={uuid()}
          />
        );
      
      case "death-barrels-spill":
      return (
        <Death
          handleAddEvent={props.handleAddEvent}
          deathtext="Soon the smell became unbearable. The chemicals in the air took their toll and rendered you unconscious. Forever."
          key={uuid()}
        />
      );

      case "death-alchemy-flaskwithfuel":
        return (
          <Death
            handleAddEvent={props.handleAddEvent}
            deathtext="Full of hope, you set the fuel to boil. Surprisingly (?), it exploded. You too. We're not exactly sure, what you were trying to do here."
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
            victorytext="This voice in your head somehow advised you to eat The Pickle. Shortly after eating it, you quickly realized that it does not matter what we really achieve in the physical world. It is but an introduction to a whole new, spiritual realm, which we should strive to understand and control, to become something more. You realize that trying to escape the room is futile, thus you begin to meditate. After 5214 hours of meditating you achieve a complete spiritual form and are able to just vibrate through the room's wall. You are free, not only from the room, but physical boundaries altogether. You're pretty much a superhuman now."
            key={uuid()}
          />
        );

      case "victory-alchemy-buildrobot":
        return (
          <Victory
            handleAddEvent={props.handleAddEvent}
            victorytext="You combined pretty much everything you have found into an awesome robot. You order it to shoot the door, and thanks to your newly acquired godly skills of robot-building, the shot is so powerful it pretty much disintegrates everything on its path. You are free, and now you also have a god damn powerful robot! You win all the robot arenas and pretty much won life. Congrats!"
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