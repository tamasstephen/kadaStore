import { Navigate, Outlet } from "react-router-dom";
import { selectSignedInState } from "../store";
import { useSelector } from "react-redux";

export const ProtectedRoutes = () => {
  const isSignedIn = useSelector(selectSignedInState);

  return isSignedIn ? <Outlet /> : <Navigate to="/" replace />;
};
