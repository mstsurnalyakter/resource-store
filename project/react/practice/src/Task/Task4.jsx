import React from 'react'

const Task4 = ({task,isDone}) => {
  return (
    <li>{task} {isDone && "Done"}</li>
  )
}

export default Task4