import { useLoaderData } from "react-router-dom";
import { CraftCards } from "../components/CraftCards";

const AllArtAndCraft = () => {
  const loadedCrafts = useLoaderData();

  return (
    <div>
      <section className="text-center max-w-lg mx-auto text-text dark:text-text">
        <h2 className="text-center text-2xl font-semibold mt-10 lg:mt-20">
          All art and craft
        </h2>
        <p>
          Explore a diverse array of artisanal creations, including intricate
          paper crafts and vibrant glass paintings. Immerse yourself in the
          beauty of these unique art forms and find the perfect piece to elevate
          your space
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:px-44">
        {loadedCrafts.map((craft) => (
          <CraftCards
            crafts={craft}
            email={craft.email}
            key={craft._id}
          ></CraftCards>
        ))}
      </section>
    </div>
  );
};

export default AllArtAndCraft;
