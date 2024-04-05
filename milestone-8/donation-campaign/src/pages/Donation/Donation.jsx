import { Button } from "@material-tailwind/react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import DonationCard from "../../components/DonationCard/DonationCard";
import { useState } from "react";

const Donation = () => {
  const { donations } = useLocalStorage();
  const [show, setShow] = useState(4)
  const [showAllBtn,setShowAllBtn] = useState(false);

  const handleShow = (showAllBtn) => {
    console.log(showAllBtn);
    setShowAllBtn(!showAllBtn);
    console.log(showAllBtn);
    if (showAllBtn) {
      setShow(4);
    } else {
      setShow(donations.length);
    }
    console.log(showAllBtn);
  };

  if (donations.length === 0) {
    return (
      <p className="text-red-500 min-h-[calc(100vh-98px)] flex items-center justify-center text-5xl font-bold">
        You have not made any donations yet.
      </p>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto max-w-7xl mt-16 px-10 lg:px-5">
        {/* {
          // donations.slice(0,show ? donations.length:4)
        } */}
        {donations.slice(0, show).map((donation) => (
          <DonationCard donation={donation} key={donation.id} />
        ))}
      </div>
      {donations.length > 4 && (
        <div className="flex items-center justify-center">
          <Button
            onClick={() => handleShow(showAllBtn)}
            className={`mt-6 ml-8 bg-green-500 text-white rounded-md capitalize text-xl`}
            size="lg"
          >
            {showAllBtn ? "Show Less" : "Show All"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Donation;
