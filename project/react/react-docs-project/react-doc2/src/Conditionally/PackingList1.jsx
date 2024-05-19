import Item1 from "./Item1";

const PackingList = () => {
  return (
    <section>
      <h2 className="text-xl font-bold">Sally Ride&apos;s Packing List</h2>
      <ul className="list-disc">
        <Item1 isPacked={true} name="Space suit" />
        <Item1 isPacked={true} name="Helmet with a golden leaf" />
        <Item1 isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

export default PackingList