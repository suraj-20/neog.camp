import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleComments = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert('From submited (:');
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={{ margin: "2rem" }}>
          <label>Username : </label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div style={{ margin: "2rem" }}>
          <label>Comments : </label>
          <textarea value={this.state.comment} onChange={this.handleComments} />
        </div>
        <div style={{ margin: "2rem" }}>
          <label>Topic : </label>
          <select
            style={{ padding: "0.3rem 2rem" }}
            value={this.state.topic}
            onChange={this.handleTopicChange}
          >
            <option>React</option>
            <option>Angular</option>
            <option>Vue</option>
          </select>
        </div>
        <div>
            <button type="submit" style={{ padding: '0.4rem 6rem', backgroundColor: 'orange' }} >Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
