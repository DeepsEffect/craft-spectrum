import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { MyCraftCard } from "../components/MyCraftCard";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MyArtAndCraft = () => {
  const { user } = useContext(AuthContext);
  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    fetch(`https://craft-spectrum-server.vercel.app/myCrafts/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCrafts(data));
  }, [user.email]);

  // console.log(crafts);

  return (
    <div>
      <h2 className="text-center text-2xl">My art and craft</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-20 mt-10">
        {crafts.length ? (
          <>
            {crafts.map((craft) => (
              <MyCraftCard
                setCrafts={setCrafts}
                craft={craft}
                crafts={crafts}
                key={craft._id}
              ></MyCraftCard>
            ))}
          </>
        ) : (
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
    </div>
  );
};

export default MyArtAndCraft;
