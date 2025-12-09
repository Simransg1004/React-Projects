import React, { useState } from 'react'

export const AddTodo = ({todos, setTodos}) => {
    const [title, setTitle] = useState("")
    const inputHandler = (e) => {
        setTitle(e.target.value)       
    }

 const addBtnHandler = () => {
    if(title) {
        setTodos([...todos, {
            id: Date.now().toString(36) + Math.random().toString(36).substring(2, 9),
            title,
            completed: false
        }])
    }
    setTitle("") //Clear the input field
 }

  return (
    <div className="input-group mb-3 p-5">
        <input onChange={inputHandler} type="text" className="form-control" placeholder="Add item..." />
        <button onClick={addBtnHandler} className="btn btn-outline-secondary" type="button">Add Todo</button>
    </div>
  )
}
