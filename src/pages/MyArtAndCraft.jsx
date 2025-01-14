import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { MyCraftCard } from "../components/MyCraftCard";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Spinner,
} from "@material-tailwind/react";
import { Link, ScrollRestoration } from "react-router-dom";

const MyArtAndCraft = () => {
  const { user } = useContext(AuthContext);
  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setLoading(true);
    fetch(`https://craft-spectrum-server.vercel.app/myCrafts/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
        setLoading(false);
      });
  }, [user.email]);

  const handleCustomizationFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  // console.log(crafts);
  const filteredCraft =
    filter === "all"
      ? crafts
      : crafts.filter((craft) => craft.customization === filter);
  // console.log(filteredCraft);

  return (
    <div>
      <ScrollRestoration></ScrollRestoration>
      <h2 className="text-center text-2xl mt-6 lg:mt-12 text-text dark:text-text">My art and craft</h2>
      <div className="flex justify-center mt-6">
        <Menu>
          <MenuHandler>
            <Button className="bg-accent dark:bg-accent">Customization</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem onClick={() => handleCustomizationFilter("all")}>
              All
            </MenuItem>
            <MenuItem onClick={() => handleCustomizationFilter("yes")}>
              Yes
            </MenuItem>
            <MenuItem onClick={() => handleCustomizationFilter("no")}>
              No
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      {loading ? (
        <div className="flex justify-center items-center mt-8">
          <Spinner size={24} />
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-44 mt-10">
          {filteredCraft.length === 0 ? (
            <p className="col-span-3 text-center text-text dark:text-text">No crafts found.</p>
          ) : (
            <>
              {" "}
              {filteredCraft.map((craft) => (
                <MyCraftCard
                  setCrafts={setCrafts}
                  craft={craft}
                  crafts={crafts}
                  key={craft._id}
                ></MyCraftCard>
              ))}
            </>
          )}
          {crafts.length === 0 && (
            <p className="col-span-3 text-center text-text dark:text-text">
              You haven&apos;t added any items yet.
              <br />
              Click Here to Add
              <br />
              <Link to={"/addCraftItem"}>
                <Button className="bg-primary dark:bg-primary">Add Item</Button>
              </Link>
            </p>
          )}
        </section>
      )}
    </div>
  );
};

export default MyArtAndCraft;
