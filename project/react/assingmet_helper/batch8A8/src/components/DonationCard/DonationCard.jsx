
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const DonationCard = ({item}) => {
     const {
       id,
       title,
       category,
       image,
       price,
       cardBg,
       textColor,
       categoryBg,
     } = item || {};

  return (
    <Card
      style={{
        backgroundColor: cardBg,
      }}
      className="w-full max-w-[48rem] flex-row mx-auto"
    >
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Button
          style={{
            backgroundColor: categoryBg,
            color: textColor,
          }}
        >
          {category}
        </Button>
        <Typography
          variant="h4"
          style={{
            color: textColor,
          }}
          className="mb-2"
        >
          {title}
        </Typography>
        <Typography
          style={{
            color: textColor,
          }}
          className="mb-8 font-normal"
        >
          ${price}.00
        </Typography>
        <Button
          style={{
            backgroundColor: textColor,
          }}
        >
          <Link to={`/donation-details/${id}`}>View Details</Link>
        </Button>
      </CardBody>
    </Card>
  );
}

DonationCard.propTypes = {
    item:PropTypes.object.isRequired
}

export default DonationCard