import React from "react";
import { UserContext, ColorContext } from "./Contexts";

const Component3 = () => (
  <div>
    <UserContext.Consumer>
      {value => (
        <div>
          <h1>Hello {value}</h1>
          <ColorContext.Consumer>
            {colorValue => (
              <h2>the value passed via ColorContext is: {colorValue}</h2>
            )}
          </ColorContext.Consumer>
        </div>
      )}
    </UserContext.Consumer>
  </div>
);

export default Component3;
