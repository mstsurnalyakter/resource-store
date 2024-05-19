
const Todo = ({task,isDone}) => {
  return (
    <div className="todo">
        <h3>Task: {task}</h3>
        <h3>isDone: {isDone.toString()}</h3>
    </div>
  )
}

export default Todo