import React, { Component } from "react";

class ToDoList extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <input
          type="checkbox"
          selected="true"
          onChange={() => {
            console.log("Changed");
          }}
        />
        <p>{this.props.test}</p>
        <hr />
      </div>
    );
  }
}

export default ToDoList;
