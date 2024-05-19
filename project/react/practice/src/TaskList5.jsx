import Task5 from "./Task5"


const TaskList5 = () => {
  return (
    <ul>
        <h3>Task 5</h3>
      <Task5 name="Learning JavaScript" isDone={true}></Task5>
      <Task5 name="Learning NodeJs" isDone={false}></Task5>
    </ul>
  );
}

export default TaskList5