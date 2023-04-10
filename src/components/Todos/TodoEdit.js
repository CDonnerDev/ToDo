import React from 'react'
import { Modal } from 'react-bootstrap'
import ToDoForm from './ToDoForm'

export default function TodoEdit(props) {
  return (
    <Modal
        show={props.showEdit}
        onHide={() => props.setShowEdit(false)}
        size='lg'>
        <Modal.Header closeButton>
            <h2>Editing {props.todo.name}</h2>
        </Modal.Header>
        <Modal.Body>
            <ToDoForm
            setShowEdit={props.setShowEdit}
            getTodos={props.getTodos}
            todo={props.todo} />
        </Modal.Body>
    </Modal>
  )
}
