import React from "react";
import { UserContext, TodosContext } from "./Contexts";

const Component3 = () => (
  <div>
    <UserContext.Consumer>
      {value => (
        <div>
          <h1>Hello {value}</h1>
          here are your todos:
          <TodosContext.Consumer>
            {todos => todos.map(todo => <li>{todo}</li>)}
          </TodosContext.Consumer>
        </div>
      )}
    </UserContext.Consumer>
  </div>
);

export default Component3;
