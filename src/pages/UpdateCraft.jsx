import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
  Textarea,
} from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const UpdateCraft = () => {
  const crafts = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
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
    // console.log(updateCraft);
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
        setLoading(false);
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Craft updated successfully");
          navigate(location?.state ? location.state : "/myArtAndCraft");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        toast.error(error.code);
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
          Update Craft
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Please edit the form to update
        </Typography>
        {/* form section */}
        {loading ? (
          <div className="flex justify-center items-center mt-8">
            <Spinner size={24} />
          </div>
        ) : (
          <form
            onSubmit={handleUpdateCraft}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 "
          >
            <div className="mb-1 flex-row lg:flex justify-center items-center gap-6 ">
              {/* section left */}
              <section className="mb-1 flex flex-col gap-6">
                {/* image input */}
                <Input
                  defaultValue={image}
                  variant="outlined"
                  name="image"
                  label="Image Url"
                  placeholder="Image Url"
                />

                {/* item name */}
                <Input
                  defaultValue={item_name}
                  name="item_name"
                  label="Item Name"
                  variant="outlined"
                  placeholder="Item name"
                />

                {/* subcategory name */}
                <select
                  defaultValue={subcategory_name}
                  name="subcategory_name"
                  className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="">Select Subcategory</option>
                  <option value="Card Making">Card Making</option>
                  <option value="Scrapbooking">Scrapbooking</option>
                  <option value="Paper Quilling & origami">
                    Paper Quilling & origami
                  </option>
                  <option value="Glass Dying & Staining">Lampworking</option>
                  <option value="Glass Dying & Staining">
                    Glass Dying & Staining
                  </option>
                </select>

                <Textarea
                  defaultValue={short_description}
                  size="lg"
                  variant="outlined"
                  label="Short Description"
                  name="short_description"
                  placeholder="Short Description"
                />
              </section>

              {/* section right */}
              <section className="mb-1 mt-6 flex flex-col gap-6">
                {/* price */}
                <Input
                  defaultValue={price}
                  variant="outlined"
                  label="Price"
                  type="number"
                  name="price"
                  placeholder="Price"
                />

                {/* rating */}
                <select
                  defaultValue={rating}
                  name="rating"
                  className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="">Select Rating</option>
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>

                {/* customization */}
                <select
                  defaultValue={customization}
                  name="customization"
                  className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="">Select Customization</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>

                {/* processing time */}
                <Input
                  defaultValue={processing_time}
                  variant="outlined"
                  label="Processing Time"
                  name="processing_time"
                />

                {/* stock status */}
                <select
                  defaultValue={stock_status}
                  name="stock_status"
                  className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="">Select Stock Status</option>
                  <option value="In Stock">In Stock</option>
                  <option value="Made To Order">Made to Order</option>
                </select>
              </section>
            </div>

            <Button type="submit" className="mt-6" fullWidth>
              Update Craft Item
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
};

export default UpdateCraft;
