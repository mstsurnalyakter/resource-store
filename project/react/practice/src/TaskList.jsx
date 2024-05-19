import Task from "./Task";

export default function TaskList(){
    return(
        <section>
            <h2>Sally Task List</h2>
            <ul>
                <Task isDone={true} name="Understand React"></Task>
                <Task isDone={false} name="Understand useState"></Task>
            </ul>
        </section>
    )
}