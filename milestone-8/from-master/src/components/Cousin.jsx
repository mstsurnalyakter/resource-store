import Special from "./Special";

const Cousin = ({ name, asset }) => {
  return (
    <div className="border p-4 m-5 rounded-xl">
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>{asset && <Special asset={asset}></Special>}</section>
    </div>
  );
};

export default Cousin;
