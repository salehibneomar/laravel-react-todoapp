import React, { useContext, useEffect } from 'react'
import Loading from '../Components/Loading'
import TodoTable from '../Components/TodoTable'
import TodoContext from '../Contexts/TodoContext'
import Pagination from '../Components/Pagination'
import Sort from '../Components/Sort'

function Home() {
  const {getAllTodos, isLoading, queries} = useContext(TodoContext) 

  useEffect(()=>{
    getAllTodos()
    .catch(err=>{
        console.log(err.message);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries])

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className='container'>
      <div className="row mt-5 mb-5">
        <div className='col-md-12 col-lg-3 mb-2 offset-lg-9'>
          <Sort/>
        </div>
        <div className="col-12 mx-auto mt-2 overflow-x-auto">
          <TodoTable />
          <Pagination/>
        </div>
      </div>
    </div>
  )
}

export default Home
