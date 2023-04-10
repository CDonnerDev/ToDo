import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import SingleTodo from './SingleTodo'
import { useAuth } from '../../contexts/AuthContext'
import TodoCreate from './TodoCreate'


export default function Todo() {
    const [todo, setTodo] = useState([])

    const { currentUser } = useAuth()

    const [showCreate, setShowCreate] = useState(false);

    const getTodos = () => {
      axios.get(`http://todoapi.colsondonnerdev.com/api/todoes`).then(response => {
        console.log(response)
        setTodo(response.data)
      })
    }

    useEffect(() => {
      getTodos()
    }, []);

  return (
    <section className="todos">
      <article className="bg-info p-5">
        <h1 className="text-center">
          Todo Dashboard
        </h1>
      </article>
      {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
        <div className="bg-dark p-2 mb-3 text-center">
          {showCreate ? 
          <>
          <button className="btn btn-warning" onClick={() => setShowCreate(false)}>Cancel</button>
          <TodoCreate getTodos={getTodos} setShowCreate={setShowCreate} />
          
          </>
          : <button className="btn btn-info" onClick={() => setShowCreate(true)}>Create Todo</button>
          }
        </div>
      }
      <Container className='p-2'>
        <table className="table bg-info table-dark my-3">
          <thead className='table-secondary text-uppercase'>
            <tr>
              <th>Name</th>
              <th>Finished?</th>
              {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
                  <th>Actions</th>
              }
            </tr>
          </thead>
          <tbody>
            {todo.map(t => 
                <SingleTodo key={t.toDoId} todo={t} getTodos={getTodos} />
            )}
          </tbody>
        </table>
      </Container>
    </section>
  )
}
