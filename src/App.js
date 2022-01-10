import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }

  handleAddTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTodo],
    });
  };

  handleClearTasks = () => {
    const newTasks = this.state.todo.filter((item) => {
      return item.completed === false;
    });
    this.setState({
      ...this.state,
      todo: newTasks,
    });
  };

  handleToggleTask = (selectedTask) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map((item) => {
        if (item.id === selectedTask.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      })
    })
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm handleAddTodo={this.handleAddTodo} />
        </div>
        <TodoList handleToggleTask={this.handleToggleTask} todo={this.state.todo} />
        <button onClick={this.handleClearTasks} className="clear-btn">
          Clear Tasks
        </button>
      </div>
    );
  }
}

export default App;
