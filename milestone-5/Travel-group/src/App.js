import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import MenuBar from "./components/MenuBar/MenuBar";

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <Home></Home>
    </div>
  );
}

export default App;
