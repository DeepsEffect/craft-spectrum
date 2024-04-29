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

  useEffect(() => {
    setLoading(true);
    fetch(`https://craft-spectrum-server.vercel.app/myCrafts/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
        setLoading(false);
      });
  }, [user.email]);

  // console.log(crafts);

  return (
    <div>
      <ScrollRestoration></ScrollRestoration>
      <h2 className="text-center text-2xl">My art and craft</h2>
      <div className="flex justify-center mt-6">
        <Menu>
          <MenuHandler>
            <Button>Customization</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Yes</MenuItem>
            <MenuItem>No</MenuItem>
          </MenuList>
        </Menu>
      </div>
      {loading ? (
        <div className="flex justify-center items-center mt-8">
          <Spinner size={24} />
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-20 mt-10">
          {crafts.map((craft) => (
            <MyCraftCard
              setCrafts={setCrafts}
              craft={craft}
              crafts={crafts}
              key={craft._id}
            ></MyCraftCard>
          ))}
          {crafts.length === 0 && (
            <p className="col-span-3 text-center">
              You haven&apos;t added any items yet.
              <br />
              Click Here to Add
              <br />
              <Link to={"/addCraftItem"}>
                <Button>Add Item</Button>
              </Link>
            </p>
          )}
        </section>
      )}
    </div>
  );
};

export default MyArtAndCraft;
