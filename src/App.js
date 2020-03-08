import * as React from 'react';
//import { React, Component } from "react";
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
//import NewTodoForm from './NewTodoForm';

/*
function App() {
  constructor() {
    super();
    this.state = {
      message: 'Hello coding world'
    };
  }
  return (
    <div className="App">
      <h1>{this.state.message}</h1>
    </div>
  );
}
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello coding world',
      newTodo: '',
      todos: [{
        title: 'Learn React',
        done: false
      }, {
        title: 'Learn JSX',
        done: false
      }]
    };

    // could perform binding here
    // this.formSubmitted = this.formSubmitted.bind(this);
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      newTodo: '', // clear form
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; // copy the array
    todos[index] = { ...todos[index] }; // copy the todo - can also use Object.assign
    todos[index].done = event.target.checked; // update done property on copied todo
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  allDone() {
    //map over array
    // for each todo
    // create new object with todo and done:true
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title, // can also do ...todo
        done: true
      }
    });

    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo" value={this.state.newTodo} />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={() => this.allDone()}>All Done</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (<li key={todo.title}>
              <input onChange={(event, index) => this.toggleTodoDone(event)} type="checkbox" checked={todo.done} />
              <span className={todo.done ? 'done' : ''}>{todo.title}</span>
              <button onClick={() => this.removeTodo(index)}>Remove</button>
            </li>)
          })}
        </ul>
      </div >
    );
  }
}

export default App;
/*<span style={{
  textDecoration: todo.done ? 'line-through' : 'inherit'
}}>{todo.title}</span>*/

//...etc is called spread operator

// left off 