import React, { Component } from 'react';

class TodoStats extends Component {
    render() {
        return (
            <div className="row todo-counts">
                <div className="col-sm-4">
                    Total Number of Todos: {this.props.totalTodos}
                </div>
                <div className="col-sm-4">
                    Active Todos: {this.props.activeTodos}
                </div>
                <div className="col-sm-4">
                    Completed Todos: {this.props.completedTodos}
                </div>
            </div>
        )
    }
}

export default TodoStats;