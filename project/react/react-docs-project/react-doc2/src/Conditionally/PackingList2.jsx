import Item2 from "./Item2";

const PackingList2 = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Sally Ride &apos;s Packing List</h2>
      <ul className="list-disc">
        <Item2 isPacked={true} name="Space suit" />
        <Item2 isPacked={false} name="Helmet with a golden leaf" />
        <Item2 isPacked={true} name="Photo of Tam" />
      </ul>
    </div>
  );
}

export default PackingList2