import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { Footer } from "../components/Footer";

const Main = () => {
  return (
    <div className="font-frank">
      <Nav></Nav>
      <div className="min-h-[calc(100vh-114px)] ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
