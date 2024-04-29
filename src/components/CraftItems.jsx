/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { CraftCards } from "./CraftCards";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const CraftItems = ({ crafts }) => {
  return (
    <div className="text-black">
      {/* header section */}
      <section className="text-center max-w-xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold lg:text-3xl">
          Discover Our Handmade{" "}
          <span className="text-blue-gray-600">
            <Typewriter
              words={[
                "Card Making",
                "Scrapbooking",
                "Paper Quilling & origami",
                "Glass Painting",
                "Lampwork",
                "Glass Dying & staining",
              ]}
              cursor
              loop={6}
              cursorStyle={"|"}
              typeSpeed={100}
              deleteSpeed={30}
            ></Typewriter>
          </span>
        </h2>
        <Fade duration={2000}>
          <p>
            Explore our curated collection of artisanal craft items,
            meticulously crafted to inspire and delight. From charming trinkets
            to stunning decor pieces, each creation tells a story of
            craftsmanship and creativity.
          </p>
        </Fade>
      </section>
      {/* cards section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10 lg:px-40 ">
        {crafts.map((craft) => (
          <CraftCards crafts={craft} key={craft._id}></CraftCards>
        ))}
      </section>
      <Link to={"/allArtAndCraft"}>
        <Button className="mx-auto border flex justify-center mt-6">
          View All Crafts
        </Button>
      </Link>
    </div>
  );
};

export default CraftItems;
