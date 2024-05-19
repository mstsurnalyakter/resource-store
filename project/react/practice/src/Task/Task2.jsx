import React from 'react'

const Task2 = ({task,isDone}) => {
  if (isDone) {
 return <li>Task Done: {task}</li>
}
return <li>Task : {task}</li>
}

export default Task2