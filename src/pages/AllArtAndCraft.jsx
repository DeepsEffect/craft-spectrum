import { useLoaderData } from "react-router-dom";
import { CraftCards } from "../components/CraftCards";

const AllArtAndCraft = () => {
  const loadedCrafts = useLoaderData();

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold">All art and craft</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-20 mt-10">
        {loadedCrafts.map((craft) => (
          <CraftCards crafts={craft} email={craft.email} key={craft._id}></CraftCards>
        ))}
      </section>
    </div>
  );
};

export default AllArtAndCraft;
