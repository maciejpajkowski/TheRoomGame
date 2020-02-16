import React from "react";
import EventCaller from "./EventCaller";

export default class GameOperator extends React.Component {
  state = {
    events: "beginning",
    start: true
  };

  handleAddEvent = eventName => {
    this.setState(() => ({
      events: eventName,
      start: false
    }));
  };

  handleResetState = () => {
    this.setState(() => ({
      events: "beginning",
      start: true
    }));
  }

  render() {
    return (
        <EventCaller
          eventToCall={this.state.events}
          setState={this.setState}
          handleReset={this.props.handleReset}
          handleResetState={this.handleResetState}
          handleAddEvent={this.handleAddEvent}
          handleAddItem={this.props.handleAddItem}
          equipment={this.props.equipment}
          start={this.state.start}
        />
    );
  }
}
