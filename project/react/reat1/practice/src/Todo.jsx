// conditional rendering option 1:
export default function Todo({ task, isDone }) {
    if (isDone) {
        return <li>Finished : {task}</li>
    }else{
        return <li>Work on : {task}</li>

    }
}