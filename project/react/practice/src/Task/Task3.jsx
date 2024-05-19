import React from 'react'

const Task3 = ({isDone, task}) => {
 return <li>{isDone ? `${task} : Done` : task}</li>
}

export default Task3