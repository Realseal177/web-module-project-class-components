import React from 'react';

import TodoList from './components/TodoList';

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
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
    }
    this.setState({
      ...this.state,
      todo: [this.state.todo, newTodo]
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
