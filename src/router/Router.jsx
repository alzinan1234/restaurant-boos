import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../pages/Home/Home";
import MenuPart from "../pages/Our-Menu/MenuPart";
import MenuDetails from "../pages/MenuDetails/MenuDetails";
import OurShop from "../pages/Our-Shop/OurShop";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Our-Menu",
        element: <MenuPart />,
      },
      {
        path: "/Our-Shop",
        element: <OurShop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu/:id",
        element: <MenuDetails />,
      },
    ],
  },
]);
