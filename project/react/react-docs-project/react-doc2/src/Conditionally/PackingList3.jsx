import Item3 from "./Item3"

const PackingList3 = () => {
  return (
    <div className="">
      <h2 className="text-xl font-bold">Sally Ride&apos;s Packing List</h2>
      <Item3 isPacked={true} name="Space suit" />
      <Item3 isPacked={false} name="Helmet with a golden leaf" />
      <Item3 isPacked={true} name="Photo of Tam" />
    </div>
  );
}



export default PackingList3