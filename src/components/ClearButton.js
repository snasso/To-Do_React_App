import React, { Component } from 'react';

class ClearButton extends Component {
    render() {
        let completedTodosCount = this.props.todos.reduce(

            function(total, todo) {

                if (todo.completed === true) {
                    return total + 1
                }
                return total;
            }, 0);

        return (
            <button className="pull-right btn" onClick={this.props.onClick} disabled={(completedTodosCount > 0) ? "" : "disabled"}>
                Clear Completed
            </button>
        )
    }
}

export default ClearButton;