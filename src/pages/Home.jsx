import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import CraftItems from "../components/CraftItems";

const Home = () => {
  const crafts = useLoaderData()

  return (
    <div >
      <Banner></Banner>
      <CraftItems crafts={crafts}></CraftItems>
    </div>
  );
};

export default Home;
