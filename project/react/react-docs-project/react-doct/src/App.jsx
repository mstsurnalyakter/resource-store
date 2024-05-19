import Avatar2 from "./components/Avatar/Avatar2";
import Avatar from "./components/Avatar/Avatar";
import Gallery from "./components/FirstComponents/Gallery"
import Todos from "./components/Todos/Todos"
import TodoList from "./components/Todos/TodoList";
import TodoList2 from "./components/Todos/TodoList2";
import Form from "./components/Form/Form";



const App = () => {
  return (
    <div>
      <section className="">
      <Form/>
      </section>
      <br />
      <Gallery />
      <br />
      <section className="flex items-center justify-center mt-5">
        <Todos />
      </section>
      <section>
        <Avatar />
        <Avatar2 />
      </section>
      <section>
        <TodoList/>
        <TodoList2/>
      </section>
    </div>
  );
}

export default App