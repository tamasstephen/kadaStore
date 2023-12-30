import { createBrowserRouter } from "react-router-dom";
import { Product, Products } from "../pages";
import { NavBar } from "../components/NavBar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: ":id",
        element: <Product />,
      },
    ],
  },
]);
