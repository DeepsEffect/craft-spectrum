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
    short_description,
    price,
    customization,
    stock_status,
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
    <Card className="w-full bg-background border">
      <CardHeader shadow={false} floated={false} className="h-96 ">
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="text-text dark:text-text">
        <div className="mb-2 flex items-center justify-between ">
          <Typography className="font-medium">
            {item_name}
          </Typography>
          <Typography className="font-medium">
            ${price}
          </Typography>
        </div>
        <Typography
          variant="small"
          className="font-normal opacity-75"
        >
          {short_description}
        </Typography>
        <Typography
          variant="small"
          className="font-normal opacity-75 "
        >
          Customization: {customization}
        </Typography>
        <Typography
          variant="small"
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
            color="blue"
            className=" shadow-none dark:text-text bg-primary dark:bg-primary hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            View Details
          </Button>
        </Link>
        <Link to={`/updateCraft/${_id}`}>
          <Button
            ripple={false}
            color={"amber"}
            fullWidth={true}
            className=" shadow-none text-white dark:text-text bg-secondary dark:bg-secondary hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Update
          </Button>
        </Link>
        {/* delete button */}
        <Button
          onClick={() => handleDeleteCraftItem(_id)}
          ripple={false}
          color="red"
          fullWidth={true}
          className="shadow-none dark:text-text hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          delete
        </Button>
      </CardFooter>
    </Card>
  );
}
