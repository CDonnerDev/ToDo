import React from 'react'
import ToDoForm from './ToDoForm'

export default function TodoCreate(props) {
  return (
    <div className='createTodo m-2 text-center'>
        <ToDoForm getTodos={props.getTodos} setShowCreate={props.setShowCreate} />
    </div>
  )
}
