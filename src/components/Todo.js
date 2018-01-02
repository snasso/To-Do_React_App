import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <li className={`list-group-item ${(this.props.completed === false) ? "greenish-border" : "reddish-border"}`}>
                <input type="checkbox" name={this.props.arrayIndex} checked={this.props.completed} 
                    onChange={this.props.onChange} value="on" />
                <label className={(this.props.completed === true) ? "done" : "not-done"} >
                    &nbsp;{this.props.item}
                </label>
            </li>
        )
    }
}

export default Todo;