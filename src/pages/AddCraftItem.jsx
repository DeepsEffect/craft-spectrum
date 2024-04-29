import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { ScrollRestoration } from "react-router-dom";

const AddCraftItem = () => {
  const { user } = useContext(AuthContext);

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
    // console.log(craftItem);

    //sending data to the server
    fetch("https://craft-spectrum-server.vercel.app/crafts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(craftItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          // console.log("data successfully posted to the Database");
          toast.success("Craft Item Added");
        }
      });
  };

  return (
    <div className="mx-auto">
      <ScrollRestoration></ScrollRestoration>
      <Card
        color="transparent"
        shadow={false}
        className="flex items-center mt-4 lg:mt-20 justify-center "
      >
        <Typography variant="h4" className="text-text dark:text-text">
          Add Craft
        </Typography>
        <Typography
          color="gray"
          className="mt-1 font-normal text-text dark:text-text"
        >
          Please fill the form to add a craft
        </Typography>
        {/* form section */}
        <form
          onSubmit={handleAddCraft}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 "
        >
          <div className="mb-1 flex-row lg:flex justify-center items-center gap-6">
            {/* section left */}
            <section className="mb-1 flex flex-col gap-6">
              {/* image input */}
              <Input
                variant="outlined"
                name="image"
                label="Image Url"
                placeholder="Image Url"
                className="text-text dark:text-text"
              />

              {/* item name */}
              <Input
                name="item_name"
                label="Item Name"
                variant="outlined"
                placeholder="Item name"
                className="text-text dark:text-text"
              />

              {/* subcategory name */}
              <select
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
                size="lg"
                variant="outlined"
                label="Short Description"
                name="short_description"
                placeholder="Short Description"
                className="text-text dark:text-text"
              />

              {/* price */}
              <Input
                variant="outlined"
                label="Price"
                type="number"
                name="price"
                placeholder="Price"
                className="text-text dark:text-text"
              />
            </section>

            {/* section right */}
            <section className="mb-1 mt-6 flex flex-col gap-6">
              <select
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
                name="customization"
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="">Select Customization</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              {/* processing time */}
              <Input
                variant="outlined"
                label="Processing Time"
                name="processing_time"
                className="text-text dark:text-text"
              />

              {/* stock status */}
              <select
                name="stock_status"
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="">Select Stock Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Made To Order">Made to Order</option>
              </select>

              {/* username */}
              <Input
                readOnly
                variant="outlined"
                label="User Name"
                name="username"
                defaultValue={user.displayName}
                placeholder="Username"
                className="text-text dark:text-text"
              />
              <div className=" mb-1 flex flex-col gap-6 mt-4">
                <Input
                  readOnly
                  variant="outlined"
                  label="User Email"
                  defaultValue={user.email}
                  name="email"
                  placeholder="user@gmail.com"
                  className="text-text dark:text-text"
                />
              </div>
            </section>
          </div>

          <Button
            type="submit"
            className="mt-6 bg-primary dark:bg-primary"
            fullWidth
          >
            Add Craft Item
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddCraftItem;
