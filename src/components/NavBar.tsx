import { selectCartAmount } from "../store/features/cartSlice";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";

export const NavBar = () => {
  const cartItemAmount = useSelector(selectCartAmount);
  return (
    <div className="  bg-bgGray ">
      <div className="w-full flex flex-col items-center">
        <div className="max-w-screen-xl w-full flex justify-between py-4">
          <p className="font-general font-semibold text-lg">
            <Link to="/">Shopperz</Link>
          </p>
          <p>
            <Link to="/cart">{cartItemAmount}</Link>
          </p>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
