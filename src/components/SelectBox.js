import React, { Component } from 'react';

class SelectBox extends Component {
    render() {
        return (
            <select onChange={this.props.onChange}>
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
            </select>
        )
    }
}

export default SelectBox;