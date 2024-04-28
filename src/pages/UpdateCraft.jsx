import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";

const UpdateCraft = () => {
  const crafts = useLoaderData();
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
  } = crafts;
  //handle add craft
  const handleUpdateCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stock_status = form.stock_status.value;
    const updateCraft = {
      image,
      item_name,
      subcategory_name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stock_status,
    };
    console.log(updateCraft);
    //sending data to the server
    fetch(`https://craft-spectrum-server.vercel.app/crafts/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          console.log("data updated successfully");
        }
      });
  };

  return (
    <div className="mx-auto">
      <Card
        color="transparent"
        shadow={false}
        className="flex items-center mt-4 lg:mt-8"
      >
        <Typography variant="h4" color="blue-gray">
          Add Craft
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Fill the form to add a craft to your website
        </Typography>
        {/* form section */}
        <form
          onSubmit={handleUpdateCraft}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex-row lg:flex justify-center items-center gap-6">
            {/* section left */}
            <section className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Craft image (url)
              </Typography>
              <Input
                defaultValue={image}
                size="lg"
                name="image"
                placeholder="https://image.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Item Name
              </Typography>
              <Input
                defaultValue={item_name}
                size="lg"
                name="item_name"
                placeholder="item name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Subcategory Name
              </Typography>
              <Input
                defaultValue={subcategory_name}
                size="lg"
                name="subcategory_name"
                placeholder="Subcategory Name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Short Description
              </Typography>
              <Input
                defaultValue={short_description}
                size="lg"
                name="short_description"
                placeholder="enter short description"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                price
              </Typography>
              <Input
                size="lg"
                defaultValue={price}
                name="price"
                placeholder="Enter Your Price"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </section>
            {/* section right */}
            <section className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Rating
              </Typography>
              <Input
                defaultValue={rating}
                size="lg"
                name="rating"
                placeholder="give your rating"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Customization
              </Typography>
              <Input
                defaultValue={customization}
                size="lg"
                name="customization"
                placeholder="is customizable - yes, no"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Processing Time
              </Typography>
              <Input
                defaultValue={processing_time}
                size="lg"
                name="processing_time"
                placeholder="how much processing time?"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Stock Status
              </Typography>
              <Input
                defaultValue={stock_status}
                size="lg"
                name="stock_status"
                placeholder="In stock or Made to Order?"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </section>
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Add Craft Item
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default UpdateCraft;
