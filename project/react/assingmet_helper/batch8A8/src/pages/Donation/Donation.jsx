import PropTypes from 'prop-types'
import useLocalStorage from '../../Hooks/useLocalStorage'
import DonationCard from '../../components/DonationCard/DonationCard';
import CustomSpinner from '../../components/CustomSpinner/CustomSpinner';
import { Button, Typography } from '@material-tailwind/react';
import { useState } from 'react';

const Donation = () => {
  const {dataLS,loading} = useLocalStorage();
  const [showAll, setShowAll] = useState(false);

  if (dataLS.length === 0) {
    return (
      <Typography
        variant="h1"
        className="text-red-500 min-h-[400px] flex items-center justify-center text-5xl font-bold"
      >
        {" "}
        You have not made any donations yet.
      </Typography>
    );
  }

  if (loading) {
    return <CustomSpinner/>
  }
  return (
    <div>
      <div className="grid mt-10 grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto  rounded-md overflow-hidden px-10 lg:px-5 object-cover">
        {
        dataLS.slice(0, showAll ? dataLS.length : 4).map((item) => (
          <DonationCard item={item} key={item.id} />
        ))
        }
      </div>
      <div className={`mt-10 flex items-center justify-center ${dataLS.length < 4 && "hidden"}`}>
        <Button onClick={()=>setShowAll(!showAll)} color="red">{showAll ? "Show Less" : "Show All"}</Button>
      </div>
    </div>
  );
}

Donation.propTypes = {}

export default Donation