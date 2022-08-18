import React, { useContext, useState } from 'react'
import TodoContext from '../Contexts/TodoContext'
import Loading from '../Components/Loading'
import { useNavigate } from 'react-router-dom'

function AddTodo() {
  const {addTodo,
         isLoading,
         setIsLoading,
         showToastAlert} = useContext(TodoContext)

  const [title, setTitle] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const navigate = useNavigate()

  const handleTitleOnChange = (e) => {
    setTitle(e.target.value);
  }

  const handleStartOnChange = (e) => {
    setStart(e.target.value);
  }

  const handleEndOnChange = (e) => {
    setEnd(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const todo = {
        title: title.trim(),
        start: start,
        end: end
    }

    addTodo(todo).then((response)=>{
      showToastAlert(response.data, 'success')
      navigate('/')
    }).catch((err)=>{
      console.log(err)
        const alert = err.response.data;
        setIsLoading(false)
        showToastAlert(alert, 'error')
    })
  }

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className='container'>
        <div className='row mt-5 mb-5'>
            <div className="col-md-6 mx-auto mt-2">
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <h5 className='card-title text-uppercase'>
                            Add new todo
                        </h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleOnSubmit}>
                            <div className="form-group mb-2">
                                <label className='mb-2' htmlFor="title">Title</label>
                                <input className='form-control' type="text" id="title" value={title} onChange={handleTitleOnChange} />
                            </div>
                            <div className="form-group mb-2">
                                <label className='mb-2' htmlFor="start">Start</label>
                                <input className='form-control' type="date" id="start" value={start} onChange={handleStartOnChange} />
                            </div>
                            <div className="form-group mb-2">
                                <label className='mb-2' htmlFor="end">End</label>
                                <input className='form-control' type="date" id="end" value={end} onChange={handleEndOnChange} />
                            </div>
                            <div className="form-group mt-4">
                                <button className='btn btn-primary float-end' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTodo
