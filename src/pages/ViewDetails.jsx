import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const ViewDetails = () => {
  const craft = useLoaderData();
  const {
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stock_status,
    email,
  } = craft;
  // console.log(image);
  // console.log(craft);

  return (
    <div>
      <ScrollRestoration></ScrollRestoration>
      <h3 className="text-center text-xl lg:text-4xl font-medium mt-6 lg:mt-20 text-text dark:text-text">
        Detailed View Of {item_name}
      </h3>
      <Card className="w-full lg:px-10 group max-w-5xl lg:border border-primary bg-background flex flex-col lg:flex-row items-center mx-auto mt-6">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-full lg:w-3/4 lg:shrink-0 "
        >
          <img
            src={image}
            alt="card-image"
            className="w-full lg:h-[500px] object-cover transition ease-in-out group-hover:scale-105"
          />
        </CardHeader>
        <CardBody className="text-text dark:text-text">
          <Typography variant="h6" className="mb-4 uppercase">
            {subcategory_name}
          </Typography>
          <Typography variant="h4" className="mb-2">
            {item_name}
          </Typography>
          <Typography className="mb-8 font-base">
            {short_description}
          </Typography>
          <Typography className="mb-4 font-medium">
            <span className="opacity-75">Price:</span> <strong>${price}</strong>
          </Typography>
          <Typography className="mb-4 font-medium">
            <span className="opacity-75">Rating:</span>
            <strong> {rating} star</strong>
          </Typography>
          <Typography className="mb-4 font-medium">
            <span className="opacity-75">Customization:</span>{" "}
            <strong>{customization}</strong>
          </Typography>
          <Typography className="mb-4 font-medium">
            <span className="opacity-75">Processing Time:</span>{" "}
            <strong>{processing_time}</strong>
          </Typography>
          <Typography className="mb-4 font-medium">
            <span className="opacity-75">Stock Status:</span>{" "}
            <strong>{stock_status}</strong>
          </Typography>
          <Typography className="mb-4 font-medium">
            <span className="opacity-75">Added By:</span>{" "}
            <strong>{email}</strong>
          </Typography>
          <Link to={"/"} className="inline-block">
            <Button
              variant="text"
              className="flex items-center gap-2 text-text dark:text-text"
            >
              Back To Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewDetails;
