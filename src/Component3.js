import React from "react";
import { UserContext } from "./UserContext";

const Component3 = () => (
  <div>
    <UserContext.Consumer>
      {value => <h1>Hello {value}</h1>}
    </UserContext.Consumer>
  </div>
);

export default Component3;
