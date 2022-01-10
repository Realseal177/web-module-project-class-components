import React from 'react';

class Todo extends React.Component {
    handleClick = () => {
        this.props.handleToggleTask(this.props.todo);
      }
    render() {
        return (
            <div onClick={this.handleClick} className={`Task ${this.props.todo.completed ? ' completed' : ''}`}>
                <p>{this.props.todo.task}</p>
            </div>
        )
    }
}

export default Todo;