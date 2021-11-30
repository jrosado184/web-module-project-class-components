/* eslint-disable react/prop-types */
import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <form className='form'>
        <input
          onChange={this.props.handleChange}
          type='text'
          placeholder='Add Todo'
        />
        <input onClick={this.props.handleAdd} type='button' value='Add' />
        <input onClick={this.props.handleClear} type='button' value='Clear' />
      </form>
    );
  }
}

export default TodoForm;
