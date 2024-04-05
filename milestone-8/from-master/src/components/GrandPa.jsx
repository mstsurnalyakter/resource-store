import { createContext } from "react";
import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";

export const AssetContext = createContext("gold")

const GrandPa = () => {
  const asset = 'diamond';
  return (
    <div className="border p-4 m-5 rounded-xl">
      <h2>GrandPa</h2>
      <AssetContext.Provider value="gold">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <Dad asset={asset}></Dad>
          <Uncle asset={asset}></Uncle>
          <Aunty></Aunty>
        </div>
      </AssetContext.Provider>
    </div>
  );
};

export default GrandPa;


/**
 * 1. Create a context and export if
 * 2. Add provider for the context with a value. value could be anything
 * 3. useContext to access value in the context API
 */