/// <reference types="vite-plugin-svgr/client" />
import { selectCartAmount } from "../store/features/cartSlice";
import { useSelector } from "react-redux";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {
  openModal,
  selectSignedInState,
  setToSignedIn,
  setToSignedOut,
  useAppDispatch,
} from "../store";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import Cart from "../assets/shopping_cart.svg?react";

export const NavBar = () => {
  const cartItemAmount = useSelector(selectCartAmount);
  const dispatch = useAppDispatch();
  const isSignedIn = useSelector(selectSignedInState);
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setToSignedIn());
      } else {
        dispatch(setToSignedOut());
      }
      return () => listen();
    });
  });

  return (
    <div className="  bg-bgGray ">
      <div className="w-full flex flex-col items-center">
        <div className="max-w-screen-xl w-full flex justify-between py-4">
          <p className="font-general font-semibold text-lg">
            <Link to="/">Shopperz</Link>
          </p>
          <div className="flex items-center">
            {isSignedIn ? (
              <button
                className="mr-2 rounded-full bg-black text-white font-semibold px-4 py-1 text-sm"
                onClick={logOut}
              >
                Log out
              </button>
            ) : (
              <>
                <button
                  className="mr-2 rounded-full bg-black text-white font-semibold px-4 py-1 text-sm"
                  onClick={() => dispatch(openModal())}
                >
                  Log in
                </button>
                <button
                  className="mr-2 rounded-full bg-black text-white font-semibold px-4 py-1 text-sm"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </>
            )}
            <div className="relative">
              <Link to="/cart">
                <Cart />
                <p className="absolute -top-2 -right-1 rounded-full bg-black text-white w-4 h-4 flex justify-center items-center text-sm">
                  {cartItemAmount}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
