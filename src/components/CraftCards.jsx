/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";
import { FaStar } from "react-icons/fa";
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
    <Fade duration={1500}>
      <Card className="w-full group dark:bg-background dark:border">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover transition ease-in-out overflow-hidden group-hover:scale-105"
          />
        </CardHeader>
        <CardBody className="">
          <div className="mb-2 flex items-center justify-between">
            <Typography
              color="blue-gray"
              className="font-medium text-2xl font-frank text-text dark:text-text "
            >
              {item_name}
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium text-text dark:text-text"
            >
              ${price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-text dark:text-text min-h-12"
          >
            {short_description}
          </Typography>
          <hr className="mt-2 mb-2" />
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-text dark:text-text flex items-center gap-1"
          >
            <strong>Ratings:</strong> {rating}
            <FaStar className="text-md text-amber-500" />
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className={
              stock_status === "In Stock"
                ? "font-normal opacity-75 text-green-500"
                : "font-normal opacity-75 text-accent dark:text-accent"
            }
          >
            <strong>{stock_status}</strong>
          </Typography>
          {email && (
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75 text-text dark:text-text"
            >
              <strong> Added By:</strong> {email}
            </Typography>
          )}
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={`/viewDetails/${_id}`}>
            <Button
              ripple={false}
              fullWidth={true}
              className=" dark:text-text bg-primary dark:bg-primary shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              View Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </Fade>
  );
}
