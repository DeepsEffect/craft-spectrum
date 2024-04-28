import { useLoaderData, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const ViewDetails = () => {
  const { id } = useParams();
  const craft = useLoaderData();
  const {
    _id,
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
    username,
  } = craft;
  console.log(image);
  console.log(craft);

  return (
    <div>
      <h3 className="text-center">view details of {id}</h3>
      <Card className="w-full max-w-5xl border border-green-500 flex-row mx-auto mt-6">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {subcategory_name}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {item_name}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            {short_description}
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Learn More
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
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewDetails;
