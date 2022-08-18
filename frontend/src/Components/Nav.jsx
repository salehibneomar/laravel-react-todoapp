import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <header className='mb-4'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark pb-3">
        <div className="container">
          <Link to='/' className="navbar-brand mb-1" >Laravel React Todo App</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to='/todos/add' className='btn btn-light ms-auto mt-2 text-uppercase'>
              Add New Todo
              </Link>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Nav
