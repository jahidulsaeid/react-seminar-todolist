import React, { Component } from 'react'
import SingleTodo from './SingleTodo';
// import { returnStatement } from '@babel/types';

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            todos: [],
            currentTodo: ""
        };
    }
   onInputChange = e => {
       this.setState({currentTodo: e.target.value})
   }
   onClickb = () => {
       let todosCopy = this.state.todos.slice();
       todosCopy.push(this.state.currentTodo);
       this.setState({todos: todosCopy, currentTodo: ""});
   }
   deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i,1);

    this.setState({todos:todosCopy});
   }

    render() {
        let bulletedTodos = this.state.todos.map((e,i) => {
            return(
                <SingleTodo todo={e} delete={()=> this.deleteTodo(i)}/>
                
            );
        });
        return (
            <div>
                <input type="text" placeholder="Enter Todo" value={this.state.currentTodo} onChange={this.onInputChange}/>
                 <button onClick={this.onClickb}>Add!</button>
                 {this.state.todos.length == 0 ? "No todos yet" : <ul>{bulletedTodos}</ul>}
            </div>
        )
    }
}

export default Counter
