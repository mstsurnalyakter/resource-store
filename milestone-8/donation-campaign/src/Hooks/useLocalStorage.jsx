import { useEffect, useState } from "react";
import useDonationData from "./useDonationData";
import { getStoredDonation } from "../utils/localStorage";


const useLocalStorage = () => {
      const { data, loading } = useDonationData();
      const [donations, setDonations] = useState([]);
      useEffect(() => {
        const donation = getStoredDonation();
        if (data.length) {
          const addedDonation = data.filter((item) =>
            donation.includes(item.id)
          );
          setDonations(addedDonation);
        }
      }, [data]);
  return {donations}
}

export default useLocalStorage