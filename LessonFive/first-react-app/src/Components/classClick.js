import React, { Component } from 'react'

export class classClick extends Component {

    clickHandler() {
        console.log("Button are clicked!")
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default classClick;
