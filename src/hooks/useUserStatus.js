import { selectIsAuth, selectRole } from "../redux/auth/authSelectors";

import { useSelector } from "react-redux";

const userRole = {
  ADMIN: "admin",
  BUYER: "buyer",
};

export const useUserStatus = () => {
  const isAuth = useSelector(selectIsAuth);
  const role = useSelector(selectRole);

  return {
    isAuth,
    isBuyer: role === userRole.BUYER,
    isAdmin: role === userRole.ADMIN,
  };
};
