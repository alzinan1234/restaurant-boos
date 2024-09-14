import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="d">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
