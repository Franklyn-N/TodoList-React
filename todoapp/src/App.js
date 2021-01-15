import React, {Component} from 'react'
import Todos from "./Todo"
import AddTodo from './AddTodo'


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'make the bed'},
      {id: 2, content: 'make the food'},
      {id: 3, content: 'sweep the floor'}
    ]
  }
  deleteTodo = (id) => {
    console.log(id);
    const NewTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos : NewTodos
    })
  }
  addTod = (tad) => {
    tad.id = Math.random();
    let newTad = [...this.state.todos, tad]
    this.setState({
      todos : newTad
    })
  }
  
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">My Todos</h1>
        <Todos myTodos={this.state.todos} delTodo={this.deleteTodo}  />
        <AddTodo addTad={this.addTod} />
      </div>
    )
  }
}

export default App;