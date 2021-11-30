import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          name: "Eat",
          id: 1,
          completed: false,
        },
        {
          name: "Study",
          id: 2,
          completed: true,
        },
        {
          name: "Code",
          id: 3,
          completed: false,
        },
      ],
      input: "",
    };
  }

  handleClear = () => {
    this.state.tasks.filter;
  };

  toggleTask = (e) => {};

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleAdd = (e) => {
    e.preventDefault();
    const newTask = {
      name: this.state.input,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state.tasks,
      tasks: [...this.state.tasks, newTask],
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='title'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleClear={this.handleClear}
        />
        {this.state.tasks.map((task) => {
          return (
            <TodoList
              toggleTask={this.toggleTask}
              className='h3'
              task={task}
              key={task.id}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
