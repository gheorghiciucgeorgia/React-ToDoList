import React, { useState, useRef, useEffect } from 'react';
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  //useState - is a react hook

  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  //storage the added todo in localstorage 
  //when you refresh the page the todoList stays unchanged
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(previousTodos => [...previousTodos, ...storedTodos]);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  //changing the state of the checknox using this function
  function toggleTodo(id) {

    //created a copy of the todo list
    //never modify the direct objects
    const newTodos = [...todos]

    //getting the todos we actually want to modify
    //finding the todo that has the same id
    const todo = newTodos.find(todo => todo.id === id)
    
    //and when we click the toggle we will change the state of the complete
    todo.complete = !todo.complete
    //setting the todos to the newTodos that had been changed
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(previousTodos => {
      return [...previousTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  //clearing the Done Todos
  function handleClearTodo(){
    const newTodos=todos.filter(todos => !todos.complete)
    setTodos(newTodos)
  }

  return (
    // This "<>" and </> is called a fragment and can
    // contain more html elements
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add ToDo</button>
      <button onClick={handleClearTodo}>Clear done ones</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>

  );
}

export default App;
