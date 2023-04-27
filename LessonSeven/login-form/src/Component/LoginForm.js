import React, { Component } from "react";
import './LoginFomr.css'

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      allEntry: ([]),
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
    console.log(event.target.value)
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
    console.log(event.target.value);
  };

  handleFormSubmit = (event) => {
    event.preventDefault()

    const newEntry = {email: this.state.email, password: this.state.password};

    this.setState({
        allEntry: ([...this.state.allEntry, newEntry])
    })

    alert('Form Submitted');
  }

  render() {
    return (
      <>
        <form action="" onSubmit={this.handleFormSubmit}>
            <div>
                <h2>Login Form</h2>
            </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="passwrod"
              id="password"
              autoComplete="off"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>

          <button type="submit">Sumbit</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
