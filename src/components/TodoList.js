// your components will all go in this `component` directory.
import React from "react";

import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
      console.log('TodoList.js this.props ===>', this.props.todo);
    return (
      <div>
        {
        this.props.todo.map((item) => (
          <Todo handleToggleTask={this.props.handleToggleTask} key={item.id} todo={item} />
        ))
        }
      </div>
    );
  }
}

export default TodoList;
