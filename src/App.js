import React, { Component } from "react";
import { render } from "react-dom";
import ToDoList from "./ToDoList";

class App extends Component {
  state = [
    {
      Placeholder: "AA",
      Paragraph: "ZZ"
    },
    {
      Placeholder: "BB",
      Paragraph: "YY"
    },
    {
      Placeholder: "CC",
      Paragraph: "XX"
    }
  ];

  render() {
    return (
      <div>
        {this.state.map(ele => (
          <ToDoList test={ele.Placeholder} para={ele.Paragraph} />
        ))}
      </div>
    );
  }
}

export default App;
