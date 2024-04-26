import { CraftCards } from "./CraftCards";

const CraftItems = () => {
  return (
    <div className="text-black">
        {/* header section */}
      <section className="text-center max-w-md mx-auto mt-10">
        <h2>Discover Our Handcrafted Treasures</h2>
        <p>
          Explore our curated collection of artisanal craft items, meticulously
          crafted to inspire and delight. From charming trinkets to stunning
          decor pieces, each creation tells a story of craftsmanship and
          creativity.
        </p>
      </section>
      {/* cards section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10 lg:px-40 ">
        <CraftCards></CraftCards>
        <CraftCards></CraftCards>
        <CraftCards></CraftCards>
        <CraftCards></CraftCards>
        <CraftCards></CraftCards>
        <CraftCards></CraftCards>
      </section>
    </div>
  );
};

export default CraftItems;
