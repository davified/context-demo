import React from "react";
import { UserContext } from "./UserContext";

const Component3 = () => (
  <div>
    <UserContext.Consumer>
      {state => (
        <h1
          onClick={() => {
            state.changeName("gordon");
          }}
        >
          Hello {state.person.name}
        </h1>
      )}
    </UserContext.Consumer>
  </div>
);

export default Component3;
