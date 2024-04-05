import { useContext } from "react";
import { AssetContext } from "./GrandPa";

const Special = ({ asset }) => {
  const gift = useContext(AssetContext)
  return (
    <div className="border p-10 m-5 rounded-xl">
      <h2>Special</h2>
      <p>has: {asset}</p>
      <p>Also has:{gift}</p>
    </div>
  );
};

export default Special