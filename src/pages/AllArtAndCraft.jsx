import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CraftCards } from "../components/CraftCards";

const AllArtAndCraft = () => {
  const loadedCrafts = useLoaderData();
  const [crafts, useCrafts] = useState(loadedCrafts);

  return (
    <div>
      <h2 className="text-center text-2xl">all art and craft</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-20 mt-10">
        {crafts.map((craft) => (
          <CraftCards crafts={craft} key={craft._id}></CraftCards>
        ))}
      </section>
    </div>
  );
};

export default AllArtAndCraft;
