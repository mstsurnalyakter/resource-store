import Task2 from "./Task2";

const TaskList2 = () =>{
    return(
        <div>
            <h2>Sally Task List</h2>
            <Task2 name="Learning JavaScript" isDone={true}></Task2>
            <Task2 name="Learning NodeJs" isDone={false}></Task2>
        </div>
    )
}

export default TaskList2;