import 'bootstrap/dist/css/bootstrap.min.css';
import { AddTodo } from './Components/AddTodo';
import { TodoList } from './Components/TodoList';
import { useState, useEffect } from 'react';
function App() {

  const getTodos = () => {
    const storedTodos = localStorage.getItem("todos")
    return storedTodos? JSON.parse(storedTodos): []
  }
  
  const [todos, setTodos] = useState(getTodos)
  
  useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

  return(
    <div>
      <h2 className='m-4 text-center'>TODO LIST</h2>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
