import React, { useState} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { FaEdit, FaTrashAlt} from 'react-icons/fa'
import TodoEdit from './TodoEdit'
import axios from 'axios'

export default function SingleTodo(props) {

  const { currentUser } = useAuth()

  const [showEdit, setShowEdit] = useState(false)

  const flipDone = () => {
    let updatedToDo = {
      toDoId: props.todo.toDoId,
      name: props.todo.name,
      done: !props.todo.done,
      categoryId: props.todo.categoryId
    }
    axios.put(`http://todoapi.colsondonnerdev.com/api/todoes/${props.todo.toDoId}`, updatedToDo).then(respone => {
      console.log()
      props.getTodos()
    })
  }

  const deleteTodo = (id) => {
    if(window.confirm(`Are you sure you want to delete ${props.todo.name}?`)) {
      axios.delete(`http://todoapi.colsondonnerdev.com/api/todoes/${id}`).then(() => props.getTodo())
    }
  }

  return (
   <tr>
    <td>
      <input className='checkbox' type='checkbox' checked={props.todo.done} onChange={() => flipDone()} />
    </td>
    <td>{props.todo.name}</td>
    <td>{props.todo.description}</td>
    {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
      <td>
        <button className="m-1 rounded" id='editLink' onClick={() => setShowEdit(true)}>
          <FaEdit />
        </button>
        <button className="m-1 rounded" id='deleteLink' onClick={() => deleteTodo(props.todo.toDoId)}>
          <FaTrashAlt />
        </button>
        {showEdit && 
          <TodoEdit
            showEdit={showEdit}
            setShowEdit={setShowEdit}
            getTodos={props.getTodos}
            todo={props.todo} />
        }
      </td>
    }
   </tr>
  )
}
