// import DaisyNav from './components/DaisyNav/DaisyNav';

import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";



const App = () => {
  return (
    <div className=''>
    <NavBar/>
    {/* <DaisyNav/> */}
      <h1 className="text-7xl">Vite + React</h1>
      <PriceOptions/>
      <LineChart/>
      <Phones/>

    </div>
  );
}

export default App