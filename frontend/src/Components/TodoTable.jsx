import React, { useContext } from 'react'
import TodoSingleRow from './TodoSingleRow'
import TodoContext from '../Contexts/TodoContext'

export default function TodoTable(props) {
  const {allTodos, currentPageInfo} = useContext(TodoContext)
  
  return (
    <table className="table table-bordered table-striped">
        <thead className="table-dark">
            <tr>
                <th>#SL</th>
                <th>Title</th>
                <th>Start</th>
                <th>End</th>
                <th>Completed</th>
                <th width='15%'>Action</th>
            </tr>
        </thead>
        <tbody>
            { allTodos.length > 0 ? allTodos.map((todo, index)=>{
                return <TodoSingleRow 
                key={index+1} 
                todo={todo} 
                // sl={((currentPageInfo-1)*10) + (index+1)}
                sl={currentPageInfo.from + index}
                />
            }) : <tr><td className='text-center' colSpan={6}>No Data!</td></tr>
            }
        </tbody>
    </table>
  )
}
