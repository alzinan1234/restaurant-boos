import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../pages/Home/Home";
import MenuPart from "../pages/Our-Menu/MenuPart";

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
    ],
  },
]);
