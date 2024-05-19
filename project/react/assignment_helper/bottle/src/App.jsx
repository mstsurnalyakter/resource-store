import Bottles from "./components/Bottles"
import Header from "./components/Header"

const App = () => {
  return (
    <div className="container mx-auto px-6 lg:px-15 xl:px-24">
      <Header/>
      <Bottles/>
    </div>
  )
}

export default App