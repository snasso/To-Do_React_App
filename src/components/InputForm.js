import React, { Component } from 'react';

class InputForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="input-group">
                    <span className="input-group-btn">
                        <button className="btn" type="submit">Add</button>
                    </span>
                    <input name="todoTitle" className="form-control" placeholder="Add a todo" />
                </div>
            </form>
        )
    }
}

export default InputForm;