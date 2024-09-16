import Footer from "../home/Footer";
import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
