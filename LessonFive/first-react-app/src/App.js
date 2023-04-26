import { Component } from "react";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from './Components/Welcome';
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/functionClick";
import ClassClick from "./Components/classClick";
import ParentComponent from "./Components/ParentComponent";
import EventBind from "./Components/EventBind";
import UserGreeting from "./Components/UserGreeting";
import NameList from "./Components/NameList";
import Stylesheet from "./Components/Stylesheet";
import Form from "./Components/Form";
import RefsDemo from "./Components/RefsDemo";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <RefsDemo />
        {/* <Form /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Java" heroName="Rama" /> */}
        {/* <Greet name="Bruce" /> */}
        {/* <Greet name="Diana" /> */}
        {/* <Welcome name="JAva" heroName="Krishna" /> */}
        {/* <Welcome name="Bruce" /> */}
        {/* <Welcome name="Diana" /> */}
      </div>
    );
  }
}

export default App;
