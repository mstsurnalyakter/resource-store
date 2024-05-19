import React from 'react'

const Task1 = ({task,isDone}) => {
  if (isDone) {
    return <li>task: {task} : Done</li>
}
return <li>task: {task}</li>
}

export default Task1