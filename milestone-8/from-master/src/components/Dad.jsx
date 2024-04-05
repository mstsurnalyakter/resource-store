import Brother from "./Brother";
import MySelf from "./MySelf";
import Sister from "./Sister";

const Dad = ({ asset }) => {
  return (
    <div className="border p-4 m-5 rounded-xl">
      <h2>Dad</h2>
      <section className="flex">
        <MySelf asset={asset}></MySelf>
        <Sister></Sister>
        <Brother></Brother>
      </section>
    </div>
  );
};

export default Dad;
