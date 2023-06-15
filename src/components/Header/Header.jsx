import { HeaderNav, StyledHeader, StyledNavLink } from "./Header.styled";

import { actions } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../hooks/useUserStatus";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth, isBuyer } = useUserStatus();
  return (
    <StyledHeader>
      <HeaderNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isAuth ? (
          <>
            {!isBuyer && <StyledNavLink to="/counter">Counter</StyledNavLink>}
            <StyledNavLink to="/todo">Todo</StyledNavLink>
          </>
        ) : (
          <>
            <StyledNavLink to="/login">Login</StyledNavLink>
            <StyledNavLink to="/register">Register</StyledNavLink>
          </>
        )}
      </HeaderNav>
      {isAuth && (
        <button type="button" onClick={() => dispatch(actions.logout())}>
          Logout
        </button>
      )}
    </StyledHeader>
  );
};

export default Header;
