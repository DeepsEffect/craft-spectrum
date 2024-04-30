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
      <section className="text-center lg:max-w-2xl mx-auto mt-10">
        <h2 className="text-xl font-semibold lg:text-3xl text-text dark:text-text max-w-4xl">
          Discover Our Handmade{" "}
          <span className="text-primary">
            <Typewriter
              words={[
                "Card Making",
                "Scrapbooking",
                "Paper Quilling",
                "origami",
                "Glass Painting",
                "Lampwork",
                "Glass Dying & staining",
              ]}
              cursor
              loop={0}
              cursorStyle={"|"}
              typeSpeed={100}
              deleteSpeed={30}
            ></Typewriter>
          </span>
        </h2>
        <Fade duration={2000}>
          <p className="text-text dark:text-text">
            Explore our curated collection of artisanal craft items,
            meticulously crafted to inspire and delight. From charming trinkets
            to stunning decor pieces, each creation tells a story of
            craftsmanship and creativity.
          </p>
        </Fade>
      </section>
      {/* cards section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10 lg:px-44 ">
        {crafts.map((craft) => (
          <CraftCards crafts={craft} key={craft._id}></CraftCards>
        ))}
      </section>
      <Link to={"/allArtAndCraft"}>
        <Button
          variant="text"
          className="flex items-center gap-2 mx-auto justify-center mt-6 text-text dark:text-text"
        >
          View All Crafts{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </Link>
    </div>
  );
};

export default CraftItems;
