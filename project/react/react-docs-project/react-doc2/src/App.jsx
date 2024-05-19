import PackingList from "./Conditionally/PackingList1";
import PackingList2 from "./Conditionally/PackingList2";
import PackingList3 from "./Conditionally/PackingList3";
import PackingList4 from "./Conditionally/PackingList4";
import PackingList5 from "./Conditionally/PackingList5";

const App = () => {
  return (
    <div className="container mx-auto p-6 lg:p-10 xl:p-24 space-y-10">
      <h1 className="text-3xl font-bold underline text-center mb-10">Hello world!</h1>
      <PackingList/>
      <PackingList2/>
      <PackingList3/>
      <PackingList4/>
      <PackingList5/>
    </div>
  );
}

export default App