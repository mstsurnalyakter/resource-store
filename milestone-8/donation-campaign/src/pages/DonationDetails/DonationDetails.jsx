import { useParams } from "react-router";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { saveDonation } from "../../utils/localStorage";
import CustomSpinner from "../../components/CustomSpinner/CustomSpinner";

const DonationDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const [singleData, setSingleData] = useState({});
  const { data, loading } = useDonationData();

  const handleDonate = () =>{
   saveDonation(idInt);

  }



  useEffect(() => {
    if (data) {
      const singleData = data.find((item) => item.id === idInt);
      setSingleData(singleData);
    }
  }, [data, idInt]);

  const {
    title,
    image,
    description,
    price,
    textColor,
  } = singleData || {};


      if (loading) {
        return <CustomSpinner />;
      }


  return (
    <Card className="mt-12 max-w-7xl mx-auto shadow-none rounded-md overflow-hidden px-10 lg:px-5 object-cover">
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
};

export default DonationDetails;
