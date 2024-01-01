/// <reference types="vite-plugin-svgr/client" />
import { selectCartAmount } from "../store/features/cartSlice";
import { useSelector } from "react-redux";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
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
import { NavButton } from ".";

export const NavBar = () => {
  const cartItemAmount = useSelector(selectCartAmount);
  const dispatch = useAppDispatch();
  const isSignedIn = useSelector(selectSignedInState);
  const navigate = useNavigate();
  const location = useLocation();

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
        <div className="px-4 lg:px-0 lg:max-w-screen-lg xl:max-w-screen-xl w-full flex justify-between py-6">
          <p className="font-general font-semibold text-lg">
            <Link to="/">Shop</Link>
          </p>
          <div className="flex items-center">
            {isSignedIn ? (
              <NavButton onClick={logOut}>Log Out</NavButton>
            ) : (
              <>
                <NavButton onClick={() => dispatch(openModal())}>
                  Log In
                </NavButton>
                <NavButton onClick={() => navigate("/register")} isInverse>
                  Register
                </NavButton>
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
