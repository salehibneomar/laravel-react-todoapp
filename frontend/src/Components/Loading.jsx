import React from 'react'

function Loading() {
  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
        <div className='card px-5 bg-dark text-white'>
            <div className="card-body">
                <h4 className='text-center'>Loading...</h4>
            </div>
        </div>
    </div>
  )
}

export default Loading
