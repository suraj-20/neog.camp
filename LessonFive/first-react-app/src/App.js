import { Component } from "react";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from './Components/Welcome';
import Message from "./Components/Message";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>

        <Message />

        {/* <Greet name="Java" />
        <Greet name="Bruce" />
        <Greet name="Diana" />
        <Welcome name="JAva" />
        <Welcome name="Bruce" />
        <Welcome name="Diana" /> */}
      </div>
    );
  }
}

export default App;
