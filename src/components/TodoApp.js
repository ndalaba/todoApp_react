import React from 'react'
import TodoForm from './TodoForm'
import TodoList from "./TodoList"

window.id = 0;

const Title = () => {
    return (
        <div>
            <div>
                <h1>to-do</h1>
            </div>
        </div>
    );
}

class TodoApp extends React.Component {
    constructor(props) {
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
            data: []
        }
    }
    // Add todo handler
    addTodo(val) {
        // Assemble data
        const todo = { text: val, id: window.id++ }
        // Update data
        this.state.data.push(todo);
        // Update state
        this.setState({ data: this.state.data });
    }
    // Handle remove
    handleRemove(id) {
        // Filter all todos except the one to be removed
        const remainder = this.state.data.filter((todo) => {
            if (todo.id !== id) return todo;
        });
        // Update state with filter
        this.setState({ data: remainder });
    }

    render() {

        return (
            <div>
                <Title />
                <TodoForm addTodo={this.addTodo.bind(this)} />
                <TodoList todos={this.state.data}  remove={this.handleRemove.bind(this)} />
            </div>
        );
    }
}

export default TodoApp;