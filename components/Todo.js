import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
    render() {
        return (
            <li>
                {this.props.text}
                <button onClick = {(e) => this.props.onRemoveClick(this.props.text)}> Remove</button>
            </li>
        );
    }
}