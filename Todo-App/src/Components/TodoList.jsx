import { useEffect, useState } from 'react'

export const TodoList = ({todos, setTodos}) => {

    const delBtnHandler = (idToDelete) => {
        const updatedTodos = todos.filter(todo => todo.id !== idToDelete)
        setTodos(updatedTodos)
    }    

    return (
        <div className='container'>
            {todos.map((todo) => (
                    <div className="row justify-content-between my-2 p-2 border" key={todo.id}>
                        <div className='col-4'>{todo.title}</div>
                        <div className="col-4">
                            <button onClick={() => editBtnHandler(todo.id)} className="btn btn-outline-secondary col-2" type="button">Edit</button>
                            <button onClick={() => delBtnHandler(todo.id)} className="btn btn-outline-secondary col-2" type="button">Delete</button>
                        </div>
                    </div>
            )) }
        </div>   
    )
}
