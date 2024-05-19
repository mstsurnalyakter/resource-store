import Actor from "./Action";
import "./App.css";
import BookStore from "./BookStore";
import Singers from "./Singers";
import Todo from "./Todo";
import Todo2 from "./Todo2";
import Todo3 from "./Todo3";
import Todo4 from "./Todo4";
import Todo5 from "./Todo5";
import Todo6 from "./Todo6";

function App() {
  const actors = ["Sakib", "Raj", "Jasim", "Jasim", "Rubel", "Salman Shah"];

  const books = [
    { name: "physic", price: 300 },
    { name: "biology", price: 200 },
    { name: "chemistry", price: 400 },
    { name: "math", price: 500 },
  ];
  const singers = [
    { name: "Dr. Mahfuzur Rahman", age: 68 },
    { name: "Eve Ranhman", age: 39 },
    { name: "Shuvro Dev", age: 58 },
    { name: "Pritom", age: 26 },
  ];
  return (
    <>
      <h1>Vite + React</h1>

      <BookStore books={books}></BookStore>

      {singers.map((singer, index) => (
        <Singers key={index} singer={singer}></Singers>
      ))}
      <br />
      <Actor name="Alex"></Actor>
      {actors.map((actor, index) => (
        <Actor key={index} name={actor}></Actor>
      ))}
      <br />

      <h3>Todo App 1</h3>
      <Todo task="Learning React" isDone={true}></Todo>
      <Todo task="Core concepts" isDone={false}></Todo>
      <h3>Todo App 2</h3>
      <Todo2 task="Learning JavaScript" isDone={true}></Todo2>
      <Todo2 task="Learning NodeJS" isDone={false}></Todo2>
      <h3>Todo App 3</h3>
      <Todo3 task="Learning Tailwind CSS" isDone={true}></Todo3>
      <Todo3 task="Learning MongoDB" isDone={false}></Todo3>

      <h3>Todo App 4</h3>
      <Todo4 task="Learning Bangla" isDone={true}></Todo4>
      <Todo4 task="Learning English" isDone={false}></Todo4>

      <h3>Todo App 5</h3>
      <Todo5 task="Learning Reading English" isDone={true}></Todo5>
      <Todo5 task="Learning Speaking English" isDone={false}></Todo5>

      <h3>Todo App 6</h3>
      <Todo6 task="Learning Writing English" isDone={true}></Todo6>
      <Todo6 task="Learning Speaking English" isDone={false}></Todo6>
    </>
  );
}

export default App;
