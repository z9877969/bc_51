import { NavLink, useLocation } from "react-router-dom";

import clsx from "clsx";
import s from "./Header.module.scss";
import styled from "@emotion/styled";

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 16px 24px;
  font-size: 18px;
  border: 1px solid red;
  border-radius: 8px;
  color: #fff;

  &.active {
    border: 1px solid blue;
    color: red;
    background-color: yellow;
  }
`;

const getActiveStyles = ({ isActive }) => clsx(s.link, isActive && s.active);

const Header = () => {
  const location = useLocation();
  console.log("location :>> ", location);
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink className={getActiveStyles} to={"/"}>
          Home
        </NavLink>
        <StyledNavLink to={"/counter"}>Counter</StyledNavLink>
        <NavLink className={getActiveStyles} to={"/todo"}>
          Todo
        </NavLink>
        <StyledNavLink to={{ pathname: "/country-news" }} state={location}>
          CountryNews
        </StyledNavLink>
        <StyledNavLink
          to={{ pathname: "/search-news", search: "query=sun&page=1" }}
        >
          SearchNews
        </StyledNavLink>
      </nav>
    </header>
  );
};

export default Header;
