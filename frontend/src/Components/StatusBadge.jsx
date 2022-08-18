import React from 'react'

function StatusBadge(props) {
  const {type, text} = props  
  return (
    <span className={`badge text-bg-${type}`}>{text}</span>
  )
}

export default StatusBadge
