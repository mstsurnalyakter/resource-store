import Special from "./Special";

const MySelf = ({ asset }) => {
  return (
    <div className="border p-4 m-5 rounded-xl">
      <h2>MySelf</h2>
      <section>
        <Special asset={asset}></Special>
      </section>
    </div>
  );
};

export default MySelf;
