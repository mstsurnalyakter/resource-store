import Cousin from "./Cousin";

const Aunty = () => {
  return (
    <div className="border p-4 m-5 rounded-xl">
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"Rita"}></Cousin>
        <Cousin name={"Dou"}></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
