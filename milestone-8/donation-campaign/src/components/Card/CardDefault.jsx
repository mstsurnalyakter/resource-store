import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardDefault = ({ item }) => {
  const {
    id,
    title,
    category,
    image,
    cardBg,
    textColor,
    categoryBg,
  } = item || {};

  return (
    <Link to={`/donation-details/${id}`} className="mx-auto">
      <Card
        style={{ backgroundColor: cardBg, color: textColor }}
        className="mt-6 overflow-hidden  cursor-pointer rounded-t-lg rounded-b-none"
      >
        <CardHeader color="blue-gray" className="rounded-none m-0">
          <img className="w-full object-cover" src={image} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Button
            style={{ backgroundColor: categoryBg, color: textColor }}
            className="mb-4"
            size="sm"
          >
            {category}
          </Button>
          <Typography
            style={{ color: textColor }}
            variant="h5"
            color="blue-gray"
            className="mb-2"
          >
            {title}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

CardDefault.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CardDefault;
