import React from 'react'

const Todos = ({myTodos, delTodo}) => {
    const todoList = myTodos.length ? (
        myTodos.map(todo => {
            return (
                <div className="collection-item"  key={todo.id}>
                    <span onClick={() => {delTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (<p className="center"> You have no todos left. Yay!</p>)
    return (
        <div className="todos collection">
          {todoList}  
        </div>
    )

} 

export default Todos