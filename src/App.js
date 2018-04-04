import React, { Component } from "react";
import "./App.css";
import { UserContext } from "./Contexts";
import Component1 from "./Component1";

class App extends Component {
  constructor() {
    this.state = {
      todos: ["buy milk", "learn js"]
    };
  }
  render() {
    const loggedInUser = "jumpstarter";
    return (
      <div className="App">
        <UserContext.Provider value={loggedInUser}>
          <Component1 />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
