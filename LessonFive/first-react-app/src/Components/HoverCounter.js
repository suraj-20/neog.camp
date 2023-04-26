import React, { Component } from "react";

export class HoverCounter extends Component {
  render() {
    let { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hovered {count} Time</h2>
      </div>
    );
  }
}

export default HoverCounter;
