import "./App.css";
import MyButton from "./MyButton";
import Todo from "./Todo";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <MyButton />
      <Todo task="Learning JavaScript" isDone={true}></Todo>
    </>
  );
}

export default App;
