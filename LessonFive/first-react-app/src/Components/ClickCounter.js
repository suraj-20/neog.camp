import React, { Component } from "react";

export class ClickCounter extends Component {
  render() {
    let { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Click {count} Time</button>
      </div>
    );
  }
}

export default ClickCounter;
