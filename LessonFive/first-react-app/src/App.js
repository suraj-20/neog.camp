import { Component } from "react";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from './Components/Welcome';
import Message from "./Components/Message";
import Counter from "./Components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>

        <Counter />

        {/* <Message /> */}

        <Greet name="Java" heroName="Rama" />
        {/* <Greet name="Bruce" />
        <Greet name="Diana" /> */}
        <Welcome name="JAva" heroName="Krishna" />
        {/* <Welcome name="Bruce" />
        <Welcome name="Diana" /> */}
      </div>
    );
  }
}

export default App;
