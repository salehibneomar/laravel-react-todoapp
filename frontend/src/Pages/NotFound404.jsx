import React from 'react'
import { Link } from 'react-router-dom'

function NotFound404() {
  const styles = {
    marginTop: '170px',
  }  
  return (
    <div className="align-items-center justify-content-center" style={styles}>
        <div className="text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
            <p className="lead">
                The page you’re looking for doesn’t exist.
            </p>
            <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>
    </div>
  )
}

export default NotFound404
