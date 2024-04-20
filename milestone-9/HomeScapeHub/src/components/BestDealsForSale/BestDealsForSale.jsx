
import {   useState } from "react";
import SaleAndRentCard from "../SaleAndRentCard/SaleAndRentCard";
import { Button } from "@material-tailwind/react";
import Spinner from "../Spinner/Spinner";
import useData from "../../hooks/useData";

const BestDealsForSale = () => {
  const { data, dataLoading } = useData();
  const [showAll, setShowAll] = useState(6);
  const [btn, setBtn] = useState(false);



  return (
    <div className="space-y-9">
      <div className="text-center space-y-5">
        <h2 className="text-2xl font-bold">Best Deals for Sale and Rent</h2>
        <p className="w-2/3 mx-auto text-[#150B2BB3]">
          Discover unbeatable deals for both sale and rent in our curated
          selection of properties. From cozy apartments to sprawling estates, we
          handpick the finest options available on the market to ensure that you
          find your dream home or investment opportunity.
        </p>
      </div>

      {dataLoading && (
        <div className="mx-auto w-14 my-7">
          <Spinner />
        </div>
      )}

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {data.length &&
          data
            .slice(0, showAll)
            .map((item) => <SaleAndRentCard key={item.id} item={item} />)}
      </div>
      <div className={`text-center`}>
        {btn ? (
          <Button
            className="bg-[#0073e1] capitalize"
            onClick={() => {
              setShowAll(6);
              setBtn(!btn);
            }}
          >
            Load Fewer Listings
          </Button>
        ) : (
          <Button
            className="bg-[#0073e1] capitalize"
            onClick={() => {
              setShowAll(data.length);
              setBtn(!btn);
            }}
          >
            Load More Listings
          </Button>
        )}
      </div>
    </div>
  );
};

export default BestDealsForSale;
