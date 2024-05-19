
import { useState } from "react";
import Countries from "./components/Countries/Countries"
import MarkCountry from "./components/MarkCountry/MarkCountry";

const App = () => {
  const [marked,setMarked] = useState([]);
  const [flags,setFlags] = useState([]);

  const handleMarked = country =>{
    const isExit = marked.find(mark => mark === country);
    if (isExit) {
      alert('Already Exist')
    }else{
      setMarked([...marked,country]);
    }
  }

  const handleFlag = flag =>{
    const isExist = flags.find(f => f === flag)
    if (isExist) {
      alert('Already Exist')
    } else {
      setFlags([...flags,flag])
    }

  }

  return (
    <div className="container mx-auto p-6 lg:px-15 xl:px-24">
      <h2 className="p-5 text-center text-3xl font-bold text-purple-400 uppercase">
        Countries List
      </h2>
      <section className="flex flex-wrap  py-5 border-2 my-5 flex-col items-center justify-center">
        <h1 className=" text-yellow-700 font-semibold">
          List Of visited countries name({marked.length})
        </h1>
        {marked.map((mark) => (
          <MarkCountry key={mark.cca3} mark={mark} />
        ))}
      </section>
      <section className="flex flex-wrap flex-col py-5 border-2 my-5 gap-3 items-center justify-center">
        <h1 className=" text-yellow-700 font-semibold">
          List Of visited countries flag({flags.length})
        </h1>
        <div className="flex flex-wrap py-5 gap-3 items-center justify-center">
          {flags.map((flag, index) => (
            <img className="w-20 h-12 border-2" key={index} src={flag} />
          ))}
        </div>
      </section>
      <section>
        <Countries handleFlag={handleFlag} handleMarked={handleMarked} />
      </section>
    </div>
  );
}

export default App