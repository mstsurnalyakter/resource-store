import { useLoaderData } from "react-router"
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";
import { useState } from "react";


const Home = () => {
  const coffees = useLoaderData();
  const [coffeeData, setCoffeeData] = useState(coffees);


  return (
    <div>
      <h2>Hot Hot Cold coffee : {coffeeData.length}</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {coffeeData?.map((coffee) => (
          <CoffeeCard
            coffeeData={coffeeData}
            setCoffeeData={setCoffeeData}
            key={coffee._id}
            coffee={coffee}
          />
        ))}
      </div>
    </div>
  );
}

export default Home