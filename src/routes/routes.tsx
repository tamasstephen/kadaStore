import { createBrowserRouter } from "react-router-dom";
import { Product, Products } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/:id",
    element: <Product />,
  },
]);
