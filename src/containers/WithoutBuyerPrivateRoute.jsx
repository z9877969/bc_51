import { Navigate } from "react-router-dom";
import { useUserStatus } from "../hooks/useUserStatus";

const WithoutBuyerPrivateRoute = ({ component, redirect = "/" }) => {
  const { isAuth, isBuyer } = useUserStatus();
  return isAuth && !isBuyer ? component : <Navigate to={redirect} />;
};

export default WithoutBuyerPrivateRoute;
