import "./App.css";
import Arr from "./Arr";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import Obj from "./Obj";
import Posts from "./Posts";

function App() {
  return (
    <>
      <h3>React Core Concepts Recap</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>load data</li>
      </ol>
      <br />

      <hr />
      <Arr>
      </Arr>
      <hr />
      <br />
      <Obj></Obj>
      <hr />
      <br />
      <Counter2></Counter2>
      <hr />
      <br />
      <Counter></Counter>
      <hr />
      <br />
      <Posts></Posts>
    </>
  );
}

export default App;
