import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { MyCraftCard } from "../components/MyCraftCard";

const MyArtAndCraft = () => {
  const { user } = useContext(AuthContext);
  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myCrafts/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCrafts(data));
  }, [user.email]);

  console.log(crafts);

  return (
    <div>
      <h2 className="text-center text-2xl">My art and craft</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-20 mt-10">
        {crafts.map((craft) => (
          <MyCraftCard crafts={craft} key={craft._id}></MyCraftCard>
        ))}
      </section>
    </div>
  );
};

export default MyArtAndCraft;
