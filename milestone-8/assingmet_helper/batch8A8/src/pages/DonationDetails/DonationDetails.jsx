import PropTypes from 'prop-types'
import useDonationData from '../../Hooks/useDonationData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { saveDonationIdToLS } from '../../utils/localStorage';
import CustomSpinner from '../../components/CustomSpinner/CustomSpinner';

const DonationDetails = () => {
    const {data,loading} = useDonationData();
    const [singleDonation,setSingleDonation] = useState({});
    const {id} = useParams();
    const idInt = parseInt(id)

    // console.log(data,loading,idInt);

    useEffect(()=>{
        const findDonation = data.find(item => item.id === idInt);
        setSingleDonation(findDonation)
    },[data,idInt]);

    const handleDonate = () =>{
        saveDonationIdToLS(idInt)
    }

    if (loading) {
      return <CustomSpinner/>
    }

     const { title, image, description, price, textColor } = singleDonation || {};

  return (
    <Card className="max-w-7xl mx-auto shadow-none rounded-md overflow-hidden px-10 lg:px-5 object-cover">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-md relative"
      >
        <img
          className="w-full rounded-md h-[550px]"
          src={image}
          alt="ui/ux review check"
        />
        <div className="absolute bottom-0 bg-opacity-40 bg-black w-full h-28 l">
          <Button
            style={{ backgroundColor: textColor }}
            onClick={handleDonate}
            className="mt-6 ml-8 text-white rounded-md capitalize text-xl"
            size="lg"
          >
            Donate $ {price}
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <Typography variant="h2" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

DonationDetails.propTypes = {}

export default DonationDetails