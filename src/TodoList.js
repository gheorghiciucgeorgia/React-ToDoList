import React from 'react'
import TodoComponent from './TodoComponent'

export default function TodoList({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
      return <TodoComponent key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    })
  )
}
