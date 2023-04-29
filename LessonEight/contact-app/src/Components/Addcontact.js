import React, { Component } from "react";

class Addcontact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
    };
  }

  namechangeHandler = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  // emailChangeHandler = (e) => {
  //   this.setState({
  //     email: e.target.value
  //   })
  // }

  addContact = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mendatory");
    }

    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="ui">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.addContact}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              value={this.state.name}
              onChange={this.namechangeHandler}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="off"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value});
              }}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default Addcontact;
