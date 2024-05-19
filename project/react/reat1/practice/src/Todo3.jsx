// conditional rendering option 3: ternary operator
export default function Todo3({ task, isDone }) {
  return <li>{isDone ? `Finished` : `Work on`} : {task}</li>;
}
