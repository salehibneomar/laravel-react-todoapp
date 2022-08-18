import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import TodoContext from '../Contexts/TodoContext'

function DeleteModal(props) {
  const {showModal, setShowModal, deleteId} = props
  const {deleteTodo, 
        getAllTodos, 
        showToastAlert, 
        dismissAlert} = useContext(TodoContext)

  const handleDelete = () => {
    setShowModal(false)
    dismissAlert()
    deleteTodo(deleteId)
    .then((response)=>{
      getAllTodos()
      showToastAlert(response.data, 'success')
    })
    .catch((err)=>{

    })
  }

  return (
    <>
    <Modal show={showModal} onHide={()=>setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You won't be able to revert this operation!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShowModal(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Okay
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default DeleteModal
