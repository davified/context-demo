import React, { Component } from "react";
import "./App.css";
import { UserContext } from "./UserContext";
import Component1 from "./Component1";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: { name: "yongming", type: "jumpstarter" },
      changeName: this.changeName.bind(this)
    };
  }

  render() {
    const loggedInUser = "jumpstarter";
    return (
      <div className="App">
        <UserContext.Provider value={this.state}>
          <Component1 />
        </UserContext.Provider>
      </div>
    );
  }

  changeName(newName) {
    this.setState({
      person: { name: newName, type: "jumpstarter" }
    });
  }
}

export default App;
