import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import StatusBadge from './StatusBadge'
import { Link } from 'react-router-dom'
import DeleteModal from '../Components/DeleteModal'

function TodoSingleRow(props) {
  const {todo, sl} = props
  const [showModal, setShowModal] = useState(false)

  return (
    <tr>
        <td>{`#${sl}`}</td>
        <td>{todo.title}</td>
        <td>{todo.start}</td>
        <td>{todo.end}</td>
        <td>{
        todo.is_completed ? <StatusBadge type={'success'} text='YES' /> : <StatusBadge type={'danger'} text='NO' />
        }
        </td>
        <td>
            <Link to={`/todos/edit/${todo.id}`} className="btn btn-primary btn-sm me-1 mb-1 text-center">
              <FaEdit/>
            </Link>

            <button
            className="btn btn-danger btn-sm me-1 mb-1 text-center"
            onClick={()=>setShowModal(true)}
            >
              <FaTrash/>
            </button>
            
            <DeleteModal 
            showModal={showModal} 
            setShowModal={setShowModal}
            deleteId={todo.id}
            />

        </td>
    </tr>
  )
}

export default TodoSingleRow
