
const Task5 = ({isDone,name}) => {
    let taskContent =name;
    if (isDone) {
        taskContent = `${name} : Done`
    }
  return (
    <li>{taskContent}</li>
  )
}

export default Task5