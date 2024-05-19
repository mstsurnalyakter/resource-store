import Task3 from "./Task3";

const TaskList3 = () =>{
    return(
        <div>
            <Task3 isDone={true} name="Learning Tailwind CSS"></Task3>
            <Task3 isDone={false} name="Learning Material UI"></Task3>
        </div>
    )
}

export default TaskList3;