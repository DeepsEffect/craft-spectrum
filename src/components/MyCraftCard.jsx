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
import Swal from "sweetalert2";

export function MyCraftCard({ craft, crafts, setCrafts }) {
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

  //handle delete
  const handleDeleteCraftItem = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://craft-spectrum-server.vercel.app/crafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Craft Deleted !",
                text: "Your Craft Item has been deleted.",
                icon: "success",
              });
              const remainingCraft = crafts.filter(
                (craftItem) => craftItem._id !== _id
              );
              setCrafts(remainingCraft);
            }
          });
      }
    });
  };

  return (
    <Card className="w-full">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {item_name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${price}
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
          {stock_status}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex flex-col gap-4">
        <Link to={`/viewDetails/${_id}`}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            View Details
          </Button>
        </Link>
        <Link to={`/updateCraft/${_id}`}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Update
          </Button>
        </Link>
        {/* delete button */}
        <Button
          onClick={() => handleDeleteCraftItem(_id)}
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          delete
        </Button>
      </CardFooter>
    </Card>
  );
}
