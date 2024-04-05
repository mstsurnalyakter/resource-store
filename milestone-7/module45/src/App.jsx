import LChart from "./components/LChart"
import Navbar from "./components/Navbar/Navbar"
import Phones from "./components/Phones"
import PriceOptions from "./components/PriceOptions"

const App = () => {
  return (
    <div>
      <Navbar/>
      <PriceOptions/>
      <Phones/>
      <LChart/>

    </div>
  )
}

export default App