import Task4 from "./Task4"

const TaskList4 = () => {
  return (
    <ul>
      <Task4 name="Learning JavaScript" isDone={true}></Task4>
      <Task4 name="Learning NodeJs" isDone={false}></Task4>
    </ul>
  );
}

export default TaskList4