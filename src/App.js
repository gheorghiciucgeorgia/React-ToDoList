import React, {useState} from 'react';
import TodoList from "./TodoList";

function App() {
  //useState - is a react hook
  //
  useState([])
  return (
    // This "<>" and </> is called a fragment and can
    // contain more html elements
    <>
      <TodoList />
      <input type="text" />
      <button>Add ToDo</button>
      <button>Clear Done ones</button>
      <div>0 left to do</div>
    </>

  );
}

export default App;
