import { Card, Input, Button, Typography } from "@material-tailwind/react";

const AddCraftItem = () => {
  
  //handle add craft
  const handleAddCraft = (e) => {
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
    const email = form.email.value;
    const username = form.username.value;
    const craftItem = {
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
    };
    console.log(craftItem);
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
          onSubmit={handleAddCraft}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex-row lg:flex justify-center items-center gap-6">
            {/* section left */}
            <section className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Craft image (url)
              </Typography>
              <Input
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
                defaultValue={"$"}
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
                size="lg"
                name="stock_status"
                placeholder="In stock or Made to Order?"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                User Name
              </Typography>
              <Input
                size="lg"
                name="username"
                placeholder="Enter Your Username"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </section>
          </div>
          <div className=" mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              User Email
            </Typography>
            <Input
              size="lg"
              name="email"
              placeholder="user@gmail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Add Craft Item
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddCraftItem;
