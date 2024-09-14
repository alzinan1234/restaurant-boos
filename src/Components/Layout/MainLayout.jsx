import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
