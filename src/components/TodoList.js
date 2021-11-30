/* eslint-disable react/prop-types */
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <h3 onClick={this.props.toggleTask} className='todo'>
        {this.props.task.name}
      </h3>
    );
  }
}

export default TodoList;
