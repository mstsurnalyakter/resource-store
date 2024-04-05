import Cousin from "./Cousin";

const Uncle = ({ asset }) => {
  return (
    <div className="border p-4 m-5 rounded-xl">
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={"Rafsan"} asset={asset}></Cousin>
        <Cousin name={"John Dou"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
