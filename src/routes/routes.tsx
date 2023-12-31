import { createBrowserRouter } from "react-router-dom";
import { Cart, Product, Products } from "../pages";
import { NavBar } from "../components";
import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectModalState } from "../store";
import { SignIn } from "../components/auth/SignIn";
import Portal from "../components/modal/Portal";

const router = createBrowserRouter([
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

export const AppRouter = () => {
  const isModalOpen = useSelector(selectModalState);
  return (
    <>
      <RouterProvider router={router} />
      {isModalOpen && (
        <Portal>
          <SignIn />
        </Portal>
      )}
    </>
  );
};
