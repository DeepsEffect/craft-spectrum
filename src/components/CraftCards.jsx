/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function CraftCards({ crafts, email }) {
  const {
    _id,
    image,
    item_name,
    short_description,
    price,
    rating,
    stock_status,
  } = crafts;

  return (
    <Card className="w-full group">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover transition ease-in-out overflow-hidden group-hover:scale-105"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {item_name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {short_description}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          Ratings: {rating}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {stock_status}
        </Typography>
        {email && (
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            added by: {email}
          </Typography>
        )}
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/viewDetails/${_id}`}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
