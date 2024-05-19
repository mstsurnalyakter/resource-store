// conditional rendering option 2:
export default function Todo2({task,isDone}) {
if (isDone) {
    return <li>Finish: {task}</li>
}
return <li>Work: {task}</li>;
}