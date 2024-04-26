import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { Footer } from "../components/Footer";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
