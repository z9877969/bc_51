import { HeaderNav, StyledHeader, StyledNavLink } from "./Header.styled";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../redux/auth/authSlice";
import { selectIsAuth } from "../../redux/auth/authSelectors";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  return (
    <StyledHeader>
      <HeaderNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isAuth ? (
          <>
            <StyledNavLink to="/counter">Counter</StyledNavLink>
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
