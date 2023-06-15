import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../redux/auth/authSelectors";
import { useSelector } from "react-redux";

const PublicRoute = ({ component, redirect = "/" }) => {
  const isAuth = useSelector(selectIsAuth);
  return !isAuth ? component : <Navigate to={redirect} />;
};

export default PublicRoute;
