/* eslint-disable react/prop-types */

import { Button } from "@material-tailwind/react";
import { CraftCardHome } from "./CraftCardHome";
import { Link } from "react-router-dom";

const CraftItems = ({ crafts }) => {
  return (
    <div className="text-black">
      {/* header section */}
      <section className="text-center max-w-md mx-auto mt-10">
        <h2 className="text-2xl">Discover Our Handcrafted Treasures</h2>
        <p>
          Explore our curated collection of artisanal craft items, meticulously
          crafted to inspire and delight. From charming trinkets to stunning
          decor pieces, each creation tells a story of craftsmanship and
          creativity.
        </p>
      </section>
      {/* cards section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10 lg:px-40 ">
        {crafts.map((craft) => (
          <CraftCardHome craft={craft} key={craft._id}></CraftCardHome>
        ))}
      </section>
      <Link to={'/allArtAndCraft'}>
        <Button className="mx-auto border flex justify-center mt-6">
          View All Crafts
        </Button>
      </Link>
    </div>
  );
};

export default CraftItems;
