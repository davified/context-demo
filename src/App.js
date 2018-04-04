import React, { Component } from "react";
import "./App.css";
import { UserContext, TodosContext } from "./Contexts";
import Component1 from "./Component1";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["buy milk", "learn javascript"]
    };
  }
  render() {
    const loggedInUser = "jumpstarter";
    return (
      <div className="App">
        <TodosContext.Provider value={this.state.todos}>
          <UserContext.Provider value={loggedInUser}>
            <Component1 />
          </UserContext.Provider>
        </TodosContext.Provider>
      </div>
    );
  }
}

export default App;
