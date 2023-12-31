import { selectCartAmount } from "../store/features/cartSlice";
import { useSelector } from "react-redux";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { openModal, useAppDispatch } from "../store";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

export const NavBar = () => {
  const cartItemAmount = useSelector(selectCartAmount);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signedIn, setSignedIn] = useState(false);

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedIn(true);
      } else {
        setSignedIn(false);
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
            {signedIn ? (
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
            <p>
              <Link to="/cart">{cartItemAmount}</Link>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
