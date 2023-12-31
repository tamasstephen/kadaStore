import { createBrowserRouter } from "react-router-dom";
import { Cart, Product, Products } from "../pages";
import { NavBar } from "../components";

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
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
