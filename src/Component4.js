import React from "react";
import { ColorContext } from "./Contexts";
import "./Component4.css";

const Component4 = () => (
  <ColorContext.Consumer>
    {value => (
      <div className={value}>I am component 4 and my theme is {value}!</div>
    )}
  </ColorContext.Consumer>
);

export default Component4;
