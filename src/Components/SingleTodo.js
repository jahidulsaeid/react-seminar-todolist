import React, { Component } from 'react'

export class SingleTodo extends Component {
    render() {
        return (
            <div>
                <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
            </div>
        )
    }
}

export default SingleTodo
