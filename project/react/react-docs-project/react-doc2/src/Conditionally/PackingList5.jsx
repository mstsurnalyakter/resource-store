import Item5 from "./Item5"


const PackingList5 = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Sally Ride&apos;s Packing List</h2>
      <ul className=" list-disc">
        <Item5 isPacked={true} name="Photo of Tam" />
        <Item5 isPacked={false} name="Helmet with a golden leaf" />
        <Item5 isPacked={true} name="Photo of Tam" />
      </ul>
    </div>
  );
}

export default PackingList5