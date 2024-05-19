
const Task4 = ({isDone,name}) => {
  return (
    <li>
        {name} {isDone && "Done"}
    </li>
  )
}

export default Task4