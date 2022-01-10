import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '',
        }
    }

    handleChanges = evt => {
        this.setState({
            ...this.state,
            input: evt.target.value
        });
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.handleAddTodo(this.state.input)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} type='text' name='item' />
                <button>Add Todo Item</button>
            </form>
        )
    }
}

export default TodoForm;
