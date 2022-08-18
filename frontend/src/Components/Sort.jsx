import React, { useContext } from 'react'
import TodoContext from '../Contexts/TodoContext'

function Sort() {
  const {queries, setQueries} = useContext(TodoContext)

  const handleSortOnChange = (e) => {
    const sort = e.target.value;
    setQueries({...queries, sort})
  }
  
  return (
    <>
        <label htmlFor='sort' className='mb-2'><b>Sort</b></label>
        <select 
            className='form-control' 
            id="sort" 
            onChange={handleSortOnChange}
            defaultValue={queries.sort}>
                <option value="id.desc">Default: Newest</option>
                <option value="id.asc">Todo: Oldest</option>
                <option value="is_completed.asc">Status: Not Completed</option>
        </select>
    </>
  )
}

export default Sort
