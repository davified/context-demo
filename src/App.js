import React, { Component } from "react";
import "./App.css";
import { UserContext } from "./UserContext";
import Component1 from "./Component1";

class App extends Component {
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
