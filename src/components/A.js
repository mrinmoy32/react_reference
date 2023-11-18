import React, { Component } from "react";
import B from "./B";
//export const myConstext = React.createContext();
import { Provider } from "./context";

export class A extends Component {
  state = {
    name: "Mrinmoy Pal",
  };
  learnContext = {
    topic: "Context API",
    // video:"40th"
  };

  kalu = {
    animal: "Cow",
  };

  render() {
    return (
      <div>
        <Provider value={this.learnContext.topic}>
          <B name={this.state.name} animal={this.kalu.animal} />
          {/* <B name={this.state.name} animal={this.kalu.animal}></B>  I could have used this line direct also to avoid double use of <B/> once for context api and once for props */}
        </Provider>
        {/* <B name={this.state.name} animal={this.kalu.animal}></B> */}
      </div>
    );
  }
}

export default A;
