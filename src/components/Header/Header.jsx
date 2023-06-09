import { HeaderNav, StyledHeader, StyledNavLink } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/counter">Counter</StyledNavLink>
        <StyledNavLink to="/todo">Todo</StyledNavLink>
      </HeaderNav>
    </StyledHeader>
  );
};

export default Header;
