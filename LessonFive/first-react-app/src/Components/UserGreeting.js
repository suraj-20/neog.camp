import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    

  render() {

    let message;
    if (this.state.isLoggedIn) {
        return <div>Welcome JavaScript</div>
    } else {
        return <div>Welcome Guest</div>
    }

    return (
        <div>{message}</div>
    )

    // if(this.state.isLoggedIn) {
    //     return <div>Welcome JavaScript</div>
    // } else {
    //     return <div>Welcome Guest</div>
    // }

    // return (
    //   <div>
    //     Hello JavaScript
    //   </div>
    // )
  }
}

export default UserGreeting
